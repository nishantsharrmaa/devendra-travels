import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SITE_URL, CONTACT_INFO } from '@/lib/config';
import { getBlogPosts } from '@/lib/get-blog-posts';
import CallToAction from '@/components/CallToAction';

export const revalidate = 300;

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      ...(post.image ? { images: [post.image] } : {}),
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  // Schema 1: BlogPosting / Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.excerpt,
    ...(post.image ? { image: post.image } : {}),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'TravelAgency',
      name: 'Devendra Travels',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/car-photo.jpg`,
      },
    },
  };

  // Schema 2: BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header & Breadcrumb */}
      <section className="relative bg-earth-700 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 to-earth-700/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-body text-saffron-300 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&rsaquo;</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span>&rsaquo;</span>
            <span className="text-earth-200 line-clamp-1">{post.category}</span>
          </nav>

          <span className="inline-block bg-saffron-500/20 text-saffron-300 border border-saffron-400/30 text-xs px-3 py-1 rounded-full font-body font-semibold uppercase tracking-wider mb-4">
            {post.category}
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-earth-300 font-body">
            <div>By <strong className="text-white">{post.author.name}</strong> ({post.author.role})</div>
            <span>•</span>
            <div>Updated: {new Date(post.updatedAt).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
            <span>•</span>
            <div>{post.readTime}</div>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-earth-100">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={675}
                unoptimized
                className="mb-10 h-auto max-h-[28rem] w-full rounded-2xl object-cover"
              />
            )}

            {post.contentHtml ? (
              <div
                className="wordpress-content"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            ) : (
              <>
                <p className="font-body text-earth-800 text-xl leading-relaxed mb-10 font-medium border-l-4 border-saffron-500 pl-6 italic">
                  {post.content.intro}
                </p>

                <div className="space-y-12">
                  {post.content.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-earth-900">
                        {section.heading}
                      </h2>
                      <p className="font-body text-earth-700 text-base md:text-lg leading-relaxed">
                        {section.body}
                      </p>

                      {section.tips && (
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mt-4">
                          <p className="font-body font-bold text-amber-900 text-sm mb-2 flex items-center gap-2">
                            <span>💡</span> Pro Driver Tip:
                          </p>
                          <ul className="list-disc list-inside space-y-1 font-body text-amber-900 text-sm">
                            {section.tips.map((tip, tIdx) => (
                              <li key={tIdx}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-earth-100">
                  <h3 className="font-display text-2xl font-bold text-earth-900 mb-3">
                    Final Thoughts
                  </h3>
                  <p className="font-body text-earth-700 text-base md:text-lg leading-relaxed">
                    {post.content.conclusion}
                  </p>
                </div>
              </>
            )}

            {/* Author Bio Box */}
            <div className="mt-12 bg-earth-50 rounded-2xl p-6 flex items-center gap-5 border border-earth-200">
              <div className="w-14 h-14 rounded-full bg-saffron-500 text-white font-display font-bold text-2xl flex items-center justify-center flex-shrink-0">
                DS
              </div>
              <div>
                <h4 className="font-display font-bold text-earth-900 text-lg">
                  Written by {post.author.name}
                </h4>
                <p className="font-body text-earth-600 text-xs md:text-sm">
                  {post.author.role} with over 15 years of driving experience across Delhi NCR, Rajasthan, Uttarakhand, and Himachal Pradesh.
                </p>
              </div>
            </div>

            {/* Internal Linking / Tour Booking CTA */}
            <div className="mt-10 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="font-display text-2xl font-bold mb-2">
                Want to do this road trip hassle-free?
              </h3>
              <p className="font-body text-earth-100 text-sm max-w-xl mx-auto mb-6">
                Travel in a sanitized, air-conditioned 7-seater Ertiga with our senior driver. Door-to-door pickup &amp; drop from Muradnagar, Ghaziabad, Noida, or Delhi.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-saffron-700 hover:bg-earth-100 font-body font-bold px-6 py-3 rounded-xl transition shadow text-sm"
                >
                  Book Private Taxi
                </Link>
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}?text=Hi%20Devendra%20ji,%20I%20read%20your%20article%20on%20${encodeURIComponent(post.title)}%20and%20want%20to%20plan%20this%20trip.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba58] text-white font-body font-bold px-6 py-3 rounded-xl transition shadow text-sm flex items-center gap-2"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
