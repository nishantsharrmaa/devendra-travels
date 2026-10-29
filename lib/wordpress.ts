import { BlogPost } from '@/lib/blog-data';

interface WordPressPost {
  slug: string;
  date?: string;
  date_gmt?: string;
  modified?: string;
  modified_gmt?: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  _embedded?: {
    author?: { name?: string }[];
    'wp:featuredmedia'?: {
      source_url?: string;
      media_details?: {
        sizes?: {
          large?: { source_url?: string };
          medium_large?: { source_url?: string };
        };
      };
    }[];
    'wp:term'?: { name?: string }[][];
  };
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#(?:x([0-9a-f]+)|([0-9]+));/gi, (_, hex: string, decimal: string) => {
      const codePoint = Number.parseInt(hex || decimal, hex ? 16 : 10);
      return Number.isInteger(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff
        ? String.fromCodePoint(codePoint)
        : '';
    })
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function htmlToText(value: string): string {
  return decodeHtmlEntities(value.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' '))
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getPublishedDate(date?: string, dateGmt?: string): string {
  const parsedDate = new Date(dateGmt || date || '');
  return Number.isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString();
}

export function formatWordPressPost(wpPost: WordPressPost): BlogPost {
  const title = htmlToText(wpPost.title?.rendered || 'Untitled Travel Guide');
  const excerpt = htmlToText(wpPost.excerpt?.rendered || '');
  const contentHtml = wpPost.content?.rendered || '';
  const categoryTerms = wpPost._embedded?.['wp:term']?.flat() || [];
  const image =
    wpPost._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium_large?.source_url ||
    wpPost._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.large?.source_url ||
    wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    contentHtml.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  const publishedAt = getPublishedDate(wpPost.date, wpPost.date_gmt);

  return {
    slug: wpPost.slug,
    title,
    excerpt,
    category: categoryTerms[0]?.name || 'Travel Guide',
    readTime: `${Math.max(1, Math.ceil(htmlToText(contentHtml).split(/\s+/).filter(Boolean).length / 200))} min read`,
    publishedAt,
    updatedAt: getPublishedDate(wpPost.modified, wpPost.modified_gmt),
    author: {
      name: wpPost._embedded?.author?.[0]?.name || 'Devendra Sharma',
      role: 'Travel Contributor',
    },
    ...(image ? { image } : {}),
    keywords: categoryTerms.slice(1).map((term) => term.name).filter((name): name is string => Boolean(name)),
    contentHtml,
    content: {
      intro: excerpt,
      sections: [],
      conclusion: '',
    },
  };
}

export async function getWordPressBlogPosts(): Promise<BlogPost[]> {
  const configuredUrl = process.env.WORDPRESS_API_URL;
  if (!configuredUrl) {
    return [];
  }

  const endpoint = new URL(configuredUrl.replace(/\/+$/, ''));
  if (!endpoint.pathname.replace(/\/+$/, '').endsWith('/posts')) {
    endpoint.pathname = `${endpoint.pathname.replace(/\/+$/, '')}/posts`;
  }
  endpoint.searchParams.set('_embed', '1');
  endpoint.searchParams.set('per_page', '100');
  endpoint.searchParams.set('status', 'publish');

  const response = await fetch(endpoint, {
    next: { revalidate: 300 },
    signal: AbortSignal.timeout(4000),
  });
  if (!response.ok) {
    throw new Error(`WordPress API returned ${response.status} ${response.statusText}.`);
  }

  const posts: unknown = await response.json();
  if (!Array.isArray(posts)) {
    throw new Error('WordPress API response was not a post list.');
  }

  if (!posts.every((post) => typeof post === 'object' && post !== null && 'slug' in post && typeof post.slug === 'string')) {
    throw new Error('WordPress API returned a post without a valid slug.');
  }

  return posts.map((post) => formatWordPressPost(post as WordPressPost));
}
