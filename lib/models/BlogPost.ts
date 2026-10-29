import mongoose, { Model, Schema } from 'mongoose';

interface BlogPostRecord {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  image?: string;
  keywords: string[];
  content: {
    intro: string;
    sections: { heading?: string; body?: string; tips?: string[] }[];
    conclusion?: string;
  };
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const BlogPostSchema = new Schema<BlogPostRecord>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    category: { type: String, required: true },
    readTime: { type: String, default: '5 min read' },
    authorName: { type: String, default: 'Devendra Sharma' },
    authorRole: { type: String, default: 'Founder & Senior Tour Guide' },
    image: { type: String },
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

const BlogPostModel: Model<BlogPostRecord> =
  (mongoose.models.BlogPost as Model<BlogPostRecord> | undefined) ||
  mongoose.model<BlogPostRecord>('BlogPost', BlogPostSchema);

export default BlogPostModel;
