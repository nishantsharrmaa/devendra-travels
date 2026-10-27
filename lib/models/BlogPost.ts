import mongoose, { Schema } from 'mongoose';

const BlogPostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    category: { type: String, required: true },
    readTime: { type: String, default: '5 min read' },
    authorName: { type: String, default: 'Devendra Sharma' },
    authorRole: { type: String, default: 'Founder & Senior Tour Guide' },
    image: { type: String, default: '/car-photo.jpg' },
    keywords: [{ type: String }],
    content: {
      intro: { type: String, required: true },
      sections: [
        {
          heading: String,
          body: String,
          tips: [String],
        },
      ],
      conclusion: String,
    },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
