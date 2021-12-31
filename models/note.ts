import mongoose, { Document, Schema, model } from 'mongoose';

export interface BaseNote extends Document {
  title: string;
  color: string;
  date: Date;
  tags: string[];
  reminder?: Date;
  tag?: string;
  project?: string;
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
    tags: { required: true, type: [String] },
    reminder: Date,
    description: String,
    items: [{ item: String, completed: Boolean }],
  },
  { versionKey: false },
);

export default mongoose.models.Note || model<Note>('Note', noteSchema, 'notes');
