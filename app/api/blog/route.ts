import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import BlogPostModel from '@/lib/models/BlogPost';
import { getBlogPosts } from '@/lib/get-blog-posts';

export const dynamic = 'force-dynamic';

function isAdminAuthorized(request: NextRequest) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  return Boolean(configuredPassword) && request.headers.get('x-admin-password') === configuredPassword;
}

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error('Error loading blog posts:', error);
    const message = error instanceof Error ? error.message : 'Unable to load blog posts.';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!isAdminAuthorized(request)) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    if (!body.title || !body.excerpt || !body.intro) {
      return NextResponse.json(
        { success: false, error: 'Title, excerpt (meta description), and intro are required.' },
        { status: 400 }
      );
    }

    const slug = body.slug
      ? body.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    await dbConnect();

    const newPost = await BlogPostModel.create({
      slug,
      title: body.title,
      excerpt: body.excerpt,
      category: body.category || 'Travel Guide',
      readTime: body.readTime || '5 min read',
      authorName: body.authorName || 'Devendra Sharma',
      authorRole: body.authorRole || 'Founder & Senior Tour Guide',
      image: body.image || undefined,
      keywords: body.keywords ? body.keywords.split(',').map((k: string) => k.trim()) : [],
      content: {
        intro: body.intro,
        sections: body.sections || [],
        conclusion: body.conclusion || '',
      },
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
