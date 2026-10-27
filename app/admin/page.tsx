"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { blogPosts as initialBlogPosts, BlogPost } from "@/lib/blog-data";

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  tour: string;
  pickupLocation: string;
  passengers: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"enquiries" | "blog" | "seo">("enquiries");

  // Blog creation state
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogPosts);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSlug, setBlogSlug] = useState("");
  const [blogCategory, setBlogCategory] = useState("Day Trips");
  const [blogExcerpt, setBlogExcerpt] = useState("");
  const [blogKeywords, setBlogKeywords] = useState("");
  const [blogIntro, setBlogIntro] = useState("");
  const [blogSectionHeading, setBlogSectionHeading] = useState("");
  const [blogSectionBody, setBlogSectionBody] = useState("");
  const [blogDriverTip, setBlogDriverTip] = useState("");
  const [blogSubmitting, setBlogSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/enquiries", {
      headers: { "x-admin-password": password },
      cache: "no-store",
    });
    if (response.ok) {
      setAdminPassword(password);
      setIsAuthenticated(true);
      setEnquiries((await response.json()).enquiries || []);
    } else {
      alert("Wrong password! Please check your ADMIN_PASSWORD in .env.local");
    }
  };

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/enquiries", {
        headers: { "x-admin-password": adminPassword },
        cache: "no-store",
      });
      const data = await response.json();
      setEnquiries(data.enquiries || []);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/enquiries/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-password": adminPassword },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setEnquiries(
          enquiries.map((e) => (e._id === id ? { ...e, status: newStatus } : e))
        );
        alert("Status updated!");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const response = await fetch(`/api/enquiries/${id}`, {
        method: "DELETE",
        headers: { "x-admin-password": adminPassword },
      });

      if (response.ok) {
        setEnquiries(enquiries.filter((e) => e._id !== id));
        alert("Enquiry deleted!");
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    }
  };

  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogSubmitting(true);

    const generatedSlug = blogSlug
      ? blogSlug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
      : blogTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const newPost: BlogPost = {
      slug: generatedSlug,
      title: blogTitle,
      excerpt: blogExcerpt,
      category: blogCategory,
      readTime: "5 min read",
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: {
        name: "Devendra Sharma",
        role: "Founder & Senior Tour Guide",
      },
      image: "/car-photo.jpg",
      keywords: blogKeywords ? blogKeywords.split(",").map((k) => k.trim()) : [],
      content: {
        intro: blogIntro,
        sections: [
          {
            heading: blogSectionHeading || "Trip Highlights & Route Advice",
            body: blogSectionBody || blogIntro,
            tips: blogDriverTip ? [blogDriverTip] : undefined,
          },
        ],
        conclusion: "Plan your trip with Devendra Travels for an unforgettable journey.",
      },
    };

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": adminPassword,
        },
        body: JSON.stringify({
          ...newPost,
          authorName: newPost.author.name,
          authorRole: newPost.author.role,
        }),
      });

      if (res.ok) {
        setBlogs([newPost, ...blogs]);
        alert("Article published successfully! Check your /blog page.");
        setBlogTitle("");
        setBlogSlug("");
        setBlogExcerpt("");
        setBlogKeywords("");
        setBlogIntro("");
        setBlogSectionHeading("");
        setBlogSectionBody("");
        setBlogDriverTip("");
      } else {
        // Even if MongoDB is offline, store in local session state so the writer can test
        setBlogs([newPost, ...blogs]);
        alert("Article added to current session! (Connect MongoDB to persist permanently).");
      }
    } catch (err) {
      setBlogs([newPost, ...blogs]);
      alert("Added to current session!");
    } finally {
      setBlogSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-earth-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md border border-earth-100">
          <div className="w-14 h-14 bg-gradient-to-br from-saffron-500 to-saffron-700 rounded-2xl flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-4 shadow-lg">
            DS
          </div>
          <h1 className="text-3xl font-display font-bold text-earth-900 mb-2 text-center">
            Staff &amp; SEO Portal
          </h1>
          <p className="font-body text-earth-500 text-sm text-center mb-6">
            Enter your admin password to manage enquiries, publish SEO blogs, and inspect search analytics.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="font-body text-xs font-semibold text-earth-700 uppercase tracking-wider block mb-1">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold py-3.5 rounded-xl transition shadow-md"
            >
              Unlock Dashboard &rarr;
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-earth-50 pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-4xl font-bold text-earth-900">
              Devendra Travels Portal
            </h1>
            <p className="font-body text-earth-600 text-sm mt-1">
              Manage client bookings, publish SEO travel content, and audit Google search signals.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="bg-white border border-earth-200 text-earth-800 hover:bg-earth-100 font-body font-semibold px-4 py-2 rounded-xl text-sm transition shadow-sm"
            >
              View Live Website ↗
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-4 py-2 rounded-xl text-sm font-body font-semibold transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-earth-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-earth-500 text-xs uppercase tracking-wider font-semibold">
                Client Enquiries
              </span>
              <span className="text-xl">📋</span>
            </div>
            <p className="font-display text-3xl font-bold text-earth-900">
              {enquiries.length}
            </p>
            <p className="font-body text-xs text-earth-400 mt-1">
              {enquiries.filter((e) => e.status === "Pending").length} pending follow-up
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-earth-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-earth-500 text-xs uppercase tracking-wider font-semibold">
                SEO Travel Blogs
              </span>
              <span className="text-xl">✍️</span>
            </div>
            <p className="font-display text-3xl font-bold text-earth-900">
              {blogs.length}
            </p>
            <p className="font-body text-xs text-earth-400 mt-1">
              Active in XML Sitemap &amp; Breadcrumb Schema
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-earth-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-earth-500 text-xs uppercase tracking-wider font-semibold">
                Rich Schemas Active
              </span>
              <span className="text-xl">✨</span>
            </div>
            <p className="font-display text-3xl font-bold text-emerald-600">
              4 Schemas
            </p>
            <p className="font-body text-xs text-earth-400 mt-1">
              FAQ, TouristTrip, BlogPosting, Breadcrumbs
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-earth-200 mb-8 space-x-2">
          <button
            onClick={() => setActiveTab("enquiries")}
            className={`font-body font-semibold px-6 py-3 rounded-t-xl text-sm transition-colors ${
              activeTab === "enquiries"
                ? "bg-white text-saffron-600 border-t-2 border-saffron-500 shadow-sm"
                : "text-earth-600 hover:text-earth-900"
            }`}
          >
            📋 Booking Enquiries ({enquiries.length})
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`font-body font-semibold px-6 py-3 rounded-t-xl text-sm transition-colors ${
              activeTab === "blog"
                ? "bg-white text-saffron-600 border-t-2 border-saffron-500 shadow-sm"
                : "text-earth-600 hover:text-earth-900"
            }`}
          >
            ✍️ SEO Content Studio &amp; Blog CMS
          </button>
          <button
            onClick={() => setActiveTab("seo")}
            className={`font-body font-semibold px-6 py-3 rounded-t-xl text-sm transition-colors ${
              activeTab === "seo"
                ? "bg-white text-saffron-600 border-t-2 border-saffron-500 shadow-sm"
                : "text-earth-600 hover:text-earth-900"
            }`}
          >
            🔍 Google Tools &amp; WordPress Sync
          </button>
        </div>

        {/* TAB 1: ENQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="bg-white rounded-3xl shadow-sm border border-earth-100 p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-bold text-earth-900">
                Customer Leads ({enquiries.length})
              </h2>
              <button
                onClick={fetchEnquiries}
                className="bg-earth-800 hover:bg-earth-900 text-white font-body text-sm font-semibold px-4 py-2 rounded-xl transition"
              >
                Refresh Leads
              </button>
            </div>

            {loading ? (
              <p className="text-center text-earth-600 py-12">Loading enquiries...</p>
            ) : enquiries.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-5xl mb-3">📬</p>
                <p className="font-display font-semibold text-earth-900 text-lg">No enquiries yet</p>
                <p className="font-body text-earth-500 text-sm">
                  Submissions through the website form will appear here instantly.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body text-sm">
                  <thead>
                    <tr className="border-b border-earth-200 text-xs font-semibold text-earth-500 uppercase tracking-wider">
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Contact</th>
                      <th className="py-3 px-4">Pickup</th>
                      <th className="py-3 px-4">Pax</th>
                      <th className="py-3 px-4">Tour</th>
                      <th className="py-3 px-4">Message</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enquiry) => (
                      <tr key={enquiry._id} className="border-b border-earth-100 hover:bg-earth-50/60">
                        <td className="py-4 px-4 font-semibold text-earth-900">{enquiry.name}</td>
                        <td className="py-4 px-4 text-earth-700">
                          <div>{enquiry.phone}</div>
                          <div className="text-xs text-earth-400">{enquiry.email}</div>
                        </td>
                        <td className="py-4 px-4 text-earth-700">{enquiry.pickupLocation || "-"}</td>
                        <td className="py-4 px-4 text-earth-700">{enquiry.passengers || "-"}</td>
                        <td className="py-4 px-4">
                          <span className="bg-saffron-50 text-saffron-800 border border-saffron-200 px-2 py-0.5 rounded-full text-xs font-semibold">
                            {enquiry.tour || "Custom Trip"}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-earth-700 max-w-xs truncate">{enquiry.message}</td>
                        <td className="py-4 px-4">
                          <select
                            value={enquiry.status}
                            onChange={(e) => updateStatus(enquiry._id, e.target.value)}
                            className="border border-earth-200 rounded-lg px-2.5 py-1 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-saffron-400"
                          >
                            <option>Pending</option>
                            <option>Contacted</option>
                            <option>Resolved</option>
                          </select>
                        </td>
                        <td className="py-4 px-4">
                          <button
                            onClick={() => deleteEnquiry(enquiry._id)}
                            className="text-red-600 hover:text-red-800 text-xs font-semibold"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: BLOG CMS & SEO STUDIO */}
        {activeTab === "blog" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Form (2 Cols) */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-earth-100">
              <h2 className="font-display text-2xl font-bold text-earth-900 mb-2">
                Publish a New Travel Guide
              </h2>
              <p className="font-body text-earth-500 text-sm mb-6">
                Fill out the article details. This automatically generates Google Article Schema, Breadcrumb Schema, and updates your sitemap.
              </p>

              <form onSubmit={handleCreateBlog} className="space-y-6">
                <div>
                  <label className="font-body text-xs font-bold text-earth-800 uppercase tracking-wider block mb-1">
                    Article Title (Target Primary Keyword) *
                  </label>
                  <input
                    type="text"
                    value={blogTitle}
                    onChange={(e) => {
                      setBlogTitle(e.target.value);
                      if (!blogSlug) {
                        setBlogSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
                      }
                    }}
                    placeholder="e.g. Complete Road Trip Guide: Delhi to Jaipur by Car"
                    required
                    className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-bold text-earth-800 uppercase tracking-wider block mb-1">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={blogSlug}
                      onChange={(e) => setBlogSlug(e.target.value)}
                      placeholder="delhi-to-jaipur-road-trip"
                      className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-bold text-earth-800 uppercase tracking-wider block mb-1">
                      Category
                    </label>
                    <select
                      value={blogCategory}
                      onChange={(e) => setBlogCategory(e.target.value)}
                      className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 bg-white"
                    >
                      <option>Day Trips</option>
                      <option>Spiritual</option>
                      <option>Weekend Escapes</option>
                      <option>Heritage &amp; Forts</option>
                      <option>Himalayan Drives</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="font-body text-xs font-bold text-earth-800 uppercase tracking-wider">
                      Meta Description / Excerpt (Target 140 - 160 Chars) *
                    </label>
                    <span
                      className={`text-xs font-body font-semibold ${
                        blogExcerpt.length >= 120 && blogExcerpt.length <= 160
                          ? "text-emerald-600"
                          : "text-amber-600"
                      }`}
                    >
                      {blogExcerpt.length}/160 chars
                    </span>
                  </div>
                  <textarea
                    rows={2}
                    value={blogExcerpt}
                    onChange={(e) => setBlogExcerpt(e.target.value)}
                    placeholder="A compelling 1-2 sentence preview that convinces searchers on Google to click your article..."
                    required
                    className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 resize-none"
                  />
                </div>

                <div>
                  <label className="font-body text-xs font-bold text-earth-800 uppercase tracking-wider block mb-1">
                    Target Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={blogKeywords}
                    onChange={(e) => setBlogKeywords(e.target.value)}
                    placeholder="Delhi to Jaipur taxi, road trip itinerary, NH48 food stops"
                    className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400"
                  />
                </div>

                <div>
                  <label className="font-body text-xs font-bold text-earth-800 uppercase tracking-wider block mb-1">
                    Introduction Lead Paragraph *
                  </label>
                  <textarea
                    rows={3}
                    value={blogIntro}
                    onChange={(e) => setBlogIntro(e.target.value)}
                    placeholder="Hook the reader with distance, drive time, and key attractions..."
                    required
                    className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400"
                  />
                </div>

                <div className="bg-earth-50 rounded-2xl p-5 border border-earth-200 space-y-4">
                  <h3 className="font-display font-bold text-earth-900 text-sm">
                    Section 1: Main Route &amp; Highlights
                  </h3>
                  <input
                    type="text"
                    value={blogSectionHeading}
                    onChange={(e) => setBlogSectionHeading(e.target.value)}
                    placeholder="Heading (e.g. 1. The Route via Delhi-Mumbai Expressway)"
                    className="w-full border border-earth-200 rounded-xl px-4 py-2.5 font-body text-sm bg-white"
                  />
                  <textarea
                    rows={4}
                    value={blogSectionBody}
                    onChange={(e) => setBlogSectionBody(e.target.value)}
                    placeholder="Detailed advice for travelers..."
                    className="w-full border border-earth-200 rounded-xl px-4 py-2.5 font-body text-sm bg-white"
                  />
                  <input
                    type="text"
                    value={blogDriverTip}
                    onChange={(e) => setBlogDriverTip(e.target.value)}
                    placeholder="💡 Pro Driver Tip: (e.g. Stop at the food court near Dausa for clean washrooms)"
                    className="w-full border border-earth-200 rounded-xl px-4 py-2.5 font-body text-sm bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={blogSubmitting}
                  className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold py-4 rounded-xl transition shadow-lg text-base disabled:opacity-50"
                >
                  {blogSubmitting ? "Publishing..." : "Publish Article Now 🚀"}
                </button>
              </form>
            </div>

            {/* Right Column: Live Google SERP Snippet Preview */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-earth-100">
                <h3 className="font-display font-bold text-earth-900 text-lg mb-2 flex items-center gap-2">
                  <span>🔍</span> Live Google SERP Preview
                </h3>
                <p className="font-body text-earth-500 text-xs mb-4">
                  This is how Google searchers will see your new article on desktop and mobile:
                </p>

                {/* Google Snippet Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-saffron-500 text-white text-[10px] flex items-center justify-center font-bold">
                      DS
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-800 font-medium leading-none">
                        Devendra Travels
                      </p>
                      <p className="text-[11px] text-gray-500 leading-tight">
                        https://devendratravels.com &rsaquo; blog &rsaquo; {blogSlug || "article-slug"}
                      </p>
                    </div>
                  </div>

                  <h4 className="text-[#1a0dab] hover:underline text-lg font-medium cursor-pointer leading-snug line-clamp-2 mt-1">
                    {blogTitle || "Enter article title to preview Google SERP"} | Devendra Travels
                  </h4>

                  <p className="text-gray-600 text-xs leading-relaxed mt-1 line-clamp-2">
                    {blogExcerpt || "Your meta description will appear here. Keep it between 140 and 160 characters for maximum click-through rates."}
                  </p>
                </div>
              </div>

              {/* Published Posts List */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-earth-100">
                <h3 className="font-display font-bold text-earth-900 text-lg mb-4">
                  Published Articles ({blogs.length})
                </h3>
                <div className="space-y-3">
                  {blogs.map((b) => (
                    <div key={b.slug} className="p-3 bg-earth-50 rounded-xl border border-earth-200">
                      <p className="font-body font-semibold text-earth-900 text-xs line-clamp-1">
                        {b.title}
                      </p>
                      <div className="flex items-center justify-between mt-2 text-[11px] text-earth-500 font-body">
                        <span>{b.category}</span>
                        <Link
                          href={`/blog/${b.slug}`}
                          target="_blank"
                          className="text-saffron-600 font-semibold hover:underline"
                        >
                          View ↗
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GOOGLE TOOLS & WORDPRESS SYNC GUIDE */}
        {activeTab === "seo" && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-earth-100 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-earth-900 mb-2">
                Google SEO Tools &amp; Masterclass Checklist
              </h2>
              <p className="font-body text-earth-600 text-sm">
                Follow these 4 practical steps to index and track your site using official Google webmaster platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tool 1 */}
              <div className="bg-earth-50 rounded-2xl p-6 border border-earth-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📊</span>
                  <h3 className="font-display font-bold text-earth-900 text-lg">
                    1. Google Search Console (GSC)
                  </h3>
                </div>
                <p className="font-body text-earth-600 text-sm leading-relaxed mb-4">
                  Submit your sitemap to start ranking. Once your site is live, open GSC, add your domain property, and submit:
                </p>
                <div className="bg-earth-900 text-earth-100 rounded-xl p-3 font-mono text-xs mb-3">
                  https://devendratravels.com/sitemap.xml
                </div>
                <p className="font-body text-xs text-earth-500">
                  GSC will monitor keyword impressions, position rankings, and crawl errors.
                </p>
              </div>

              {/* Tool 2 */}
              <div className="bg-earth-50 rounded-2xl p-6 border border-earth-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✨</span>
                  <h3 className="font-display font-bold text-earth-900 text-lg">
                    2. Google Rich Results Test
                  </h3>
                </div>
                <p className="font-body text-earth-600 text-sm leading-relaxed mb-4">
                  Verify the Schema markup we built for your site. Go to{" "}
                  <a
                    href="https://search.google.com/test/rich-results"
                    target="_blank"
                    rel="noreferrer"
                    className="text-saffron-600 font-semibold underline"
                  >
                    search.google.com/test/rich-results
                  </a>{" "}
                  and test your pages:
                </p>
                <ul className="list-disc list-inside space-y-1 font-body text-xs text-earth-700">
                  <li><strong>Homepage:</strong> Validates `FAQPage` Schema.</li>
                  <li><strong>Tours:</strong> Validates `TouristTrip` Product Schema.</li>
                  <li><strong>Blog:</strong> Validates `BlogPosting` &amp; Breadcrumb Schema.</li>
                </ul>
              </div>

              {/* Tool 3 */}
              <div className="bg-earth-50 rounded-2xl p-6 border border-earth-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📈</span>
                  <h3 className="font-display font-bold text-earth-900 text-lg">
                    3. Google Analytics 4 (GA4)
                  </h3>
                </div>
                <p className="font-body text-earth-600 text-sm leading-relaxed mb-4">
                  Track real user conversions. Measure how many people read your Agra blog post and proceed to click the WhatsApp or Booking button.
                </p>
                <p className="font-body text-xs text-earth-500">
                  Add your GA4 Measurement ID (`G-XXXXXXXXXX`) to `.env.local` to start collecting analytics.
                </p>
              </div>

              {/* Tool 4 */}
              <div className="bg-earth-50 rounded-2xl p-6 border border-earth-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🌐</span>
                  <h3 className="font-display font-bold text-earth-900 text-lg">
                    4. Headless WordPress Sync
                  </h3>
                </div>
                <p className="font-body text-earth-600 text-sm leading-relaxed mb-3">
                  If you have a WordPress website for writers, simply add this variable to <code className="bg-earth-200 px-1 py-0.5 rounded text-xs">.env.local</code>:
                </p>
                <div className="bg-earth-900 text-earth-100 rounded-xl p-3 font-mono text-xs mb-3">
                  WORDPRESS_API_URL=https://your-wp-site.com/wp-json/wp/v2
                </div>
                <p className="font-body text-xs text-earth-500">
                  Next.js will automatically fetch live posts from WordPress via REST API every 60 seconds with Incremental Static Regeneration (ISR)!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
