import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    features: [{ type: String }],
    link: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);