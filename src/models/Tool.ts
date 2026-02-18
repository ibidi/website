import mongoose, { Schema, Document } from 'mongoose';

export interface ITool extends Document {
  name: string;
  description: string;
  icon?: string;
  link: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const ToolSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String },
    link: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Tool || mongoose.model<ITool>('Tool', ToolSchema);