import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '@/lib/config';
import { getBlogPosts } from '@/lib/get-blog-posts';
import CallToAction from '@/components/CallToAction';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Travel Guides & Road Trip Tips - India Tours',
  description: 'Explore practical travel guides, road trip itineraries, and temple visit tips from local drivers and travel guides at Devendra Travels.',
  keywords: 'India travel blog, Delhi to Agra road trip, Mathura Vrindavan tour guide, best hill stations near Delhi, road trip tips India',
  openGraph: {
    title: 'Devendra Travels Blog - Expert India Travel & Road Trip Guides',
    description: 'Read the latest guides on exploring Agra, Rajasthan, Himalayas, and spiritual shrines across India.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogListingPage() {
  const blogPosts = await getBlogPosts();
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Devendra Travels Blog & Travel Guides',
    description: 'Handcrafted travel guides and road trip tips across North India',
    url: `${SITE_URL}/blog`,
    hasPart: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Header */}
      <section className="relative bg-earth-700 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 to-earth-700/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-400 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Local Wisdom &amp; Itineraries
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Travel Guides &amp; Road Trip Stories
          </h1>
          <p className="font-body text-earth-200 text-lg max-w-2xl mx-auto">
            Practical advice, road conditions, temple timings, and insider tips from 15+ years of driving across India.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-earth-100"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={675}
                    unoptimized
                    className="h-52 w-full object-cover"
                  />
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4 text-xs font-semibold">
                    <span className="bg-saffron-100 text-saffron-800 px-3 py-1 rounded-full uppercase tracking-wider font-body">
                      {post.category}
                    </span>
                    <span className="text-earth-400 font-body">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-earth-900 mb-3 group-hover:text-saffron-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="font-body text-earth-600 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="pt-6 border-t border-earth-100 flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-body font-bold text-earth-900 text-xs">
                        {post.author.name}
                      </p>
                      <p className="font-body text-earth-400 text-xs">
                        {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-body text-saffron-600 hover:text-saffron-700 text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Read Article &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
