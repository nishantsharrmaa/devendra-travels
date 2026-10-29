import { cache } from 'react';
import dbConnect from '@/lib/mongodb';
import BlogPostModel from '@/lib/models/BlogPost';
import { BlogPost, blogPosts as defaultBlogPosts } from '@/lib/blog-data';
import { getWordPressBlogPosts } from '@/lib/wordpress';

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  if (process.env.WORDPRESS_API_URL) {
    try {
      const wordpressPosts = await getWordPressBlogPosts();
      if (wordpressPosts.length > 0) {
        return wordpressPosts;
      }
    } catch (error) {
      console.error('Unable to load blog posts from WordPress; trying the configured fallback sources.', error);
    }
  }

  if (!process.env.MONGODB_URI) {
    return defaultBlogPosts;
  }

  try {
    await dbConnect();
    const storedPosts = await BlogPostModel.find({ published: true })
      .sort({ createdAt: -1 })
      .lean();

    const customPosts = storedPosts.map((post): BlogPost => {
      const createdAt = post.createdAt ?? new Date();
      const updatedAt = post.updatedAt ?? createdAt;

      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        readTime: post.readTime || '5 min read',
        publishedAt: new Date(createdAt).toISOString(),
        updatedAt: new Date(updatedAt).toISOString(),
        author: {
          name: post.authorName || 'Devendra Sharma',
          role: post.authorRole || 'Founder & Senior Tour Guide',
        },
        ...(post.image && post.image !== '/car-photo.jpg' ? { image: post.image } : {}),
        keywords: post.keywords || [],
        content: {
          intro: post.content.intro,
          sections: post.content.sections.map((section) => ({
            heading: section.heading || '',
            body: section.body || '',
            ...(section.tips?.length ? { tips: section.tips } : {}),
          })),
          conclusion: post.content.conclusion || '',
        },
      };
    });

    const customSlugs = new Set(customPosts.map((post) => post.slug));
    return [...customPosts, ...defaultBlogPosts.filter((post) => !customSlugs.has(post.slug))];
  } catch (error) {
    console.error('Unable to load published blog posts from MongoDB; using built-in articles.', error);
    return defaultBlogPosts;
  }
});
