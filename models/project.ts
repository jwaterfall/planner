import mongoose, { Document, Schema, model } from 'mongoose';

export interface IProject extends Document {
  name: string;
  color: string;
}

const projectSchema = new Schema<IProject>(
  {
    name: { required: true, index: true, type: String },
    color: { required: true, type: String },
  },
  { versionKey: false },
);

export default mongoose.models.Project ||
  model<IProject>('Project', projectSchema, 'projects');
