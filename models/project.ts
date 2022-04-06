import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface Project extends Document {
  author: string;
  name: string;
  color: string;
}

const projectSchema = new Schema<Project>(
  {
    author: { required: true, index: true, type: String },
    name: { required: true, index: true, type: String },
    color: { required: true, type: String },
  },
  { versionKey: false },
);

const ProjectModel = (mongoose.models.Project ??
  model<Project>('Project', projectSchema, 'projects')) as Model<Project>;

export default ProjectModel;
