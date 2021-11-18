import mongoose, { Document, Schema, model } from 'mongoose';

export interface BaseTask extends Document {
  name: string;
  color: string;
  date: Date;
  tags: string[];
  reminder?: Date;
}

export interface DefaultTask extends BaseTask {
  type: 'default';
  description: string;
}

export interface ChecklistTask extends BaseTask {
  type: 'checklist';
  items: { item: string; completed: boolean }[];
}

export type Task = DefaultTask | ChecklistTask;

const taskSchema = new Schema<Task>(
  {
    name: { required: true, index: true, type: String },
    type: { required: true, type: String },
    color: { required: true, type: String },
    date: { required: true, type: Date },
    tags: { required: true, type: [String] },
    reminder: Date,
    description: String,
    items: [{ item: String, completed: Boolean }],
  },
  { versionKey: false },
);

export default mongoose.models.Task || model<Task>('Task', taskSchema, 'tasks');
