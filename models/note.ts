import mongoose, { Document, Schema, model } from 'mongoose';

import { Project } from './project';
import { Tag } from './tag';

export interface BaseNote extends Document {
  title: string;
  color: string;
  date: Date;
  tags: Tag[];
  reminder?: Date;
  project?: Project;
}

export interface DefaultNote extends BaseNote {
  type: 'default';
  description: string;
}

export interface ChecklistNote extends BaseNote {
  type: 'checklist';
  items: { item: string; completed: boolean }[];
}

export type Note = DefaultNote | ChecklistNote;

const noteSchema = new Schema<Note>(
  {
    title: { required: true, index: true, type: String },
    type: { required: true, type: String },
    color: { required: true, type: String },
    date: { required: true, type: Date },
    tags: { required: true, type: [Schema.Types.ObjectId], ref: 'Tag' },
    reminder: Date,
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
    description: String,
    items: [{ item: String, completed: Boolean }],
  },
  { versionKey: false },
);

export default mongoose.models.Note || model<Note>('Note', noteSchema, 'notes');
