import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  image?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);