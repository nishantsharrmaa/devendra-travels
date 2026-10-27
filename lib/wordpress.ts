import { BlogPost, blogPosts as defaultBlogPosts } from '@/lib/blog-data';

const WP_API_URL = process.env.WORDPRESS_API_URL;

/**
 * Transforms WordPress REST API post objects into our unified BlogPost schema.
 */
export function formatWordPressPost(wpPost: any): BlogPost {
  const featuredImage =
    wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/car-photo.jpg';

  // Strip HTML tags for the clean excerpt
  const rawExcerpt = wpPost.excerpt?.rendered || '';
  const cleanExcerpt = rawExcerpt.replace(/<[^>]+>/g, '').trim();

  // Extract author name
  const authorName = wpPost._embedded?.author?.[0]?.name || 'Devendra Sharma';

  return {
    slug: wpPost.slug,
    title: wpPost.title?.rendered || 'Untitled Travel Guide',
    excerpt: cleanExcerpt,
    category: wpPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'Travel Guide',
    readTime: '5 min read',
    publishedAt: wpPost.date_gmt ? `${wpPost.date_gmt}Z` : new Date().toISOString(),
    updatedAt: wpPost.modified_gmt ? `${wpPost.modified_gmt}Z` : new Date().toISOString(),
    author: {
      name: authorName,
      role: 'Travel Contributor',
    },
    image: featuredImage,
    keywords: ['India travel', 'road trip', 'tour guide'],
    content: {
      intro: cleanExcerpt,
      sections: [
        {
          heading: 'Travel Overview & Highlights',
          body: wpPost.content?.rendered?.replace(/<[^>]+>/g, ' ').slice(0, 1500) || '',
        },
      ],
      conclusion: 'For a personalized door-to-door itinerary and private driver, reach out to Devendra Travels.',
    },
  };
}

/**
 * Fetches blog posts from WordPress REST API if WORDPRESS_API_URL is configured.
 * Otherwise, falls back smoothly to built-in blog posts.
 */
export async function getLiveBlogPosts(): Promise<BlogPost[]> {
  if (!WP_API_URL) {
    return defaultBlogPosts;
  }

  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=20`, {
      next: { revalidate: 60 }, // Incremental Static Regeneration (ISR)
    });

    if (!res.ok) {
      console.warn('Failed to fetch from WordPress API, falling back to local data');
      return defaultBlogPosts;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return defaultBlogPosts;
    }

    return data.map(formatWordPressPost);
  } catch (err) {
    console.error('Error connecting to WordPress API:', err);
    return defaultBlogPosts;
  }
}
