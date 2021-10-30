import mongoose, { Document, Schema, model } from 'mongoose';

export interface Project extends Document {
  name: string;
  color: string;
}

const projectSchema = new Schema<Project>(
  {
    name: { required: true, index: true, type: String },
    color: { required: true, type: String },
  },
  { versionKey: false },
);

export default mongoose.models.Project ||
  model<Project>('Project', projectSchema, 'projects');
