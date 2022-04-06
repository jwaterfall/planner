import mongoose, { Document, Model, Schema, model } from 'mongoose';

import { Project } from './project';
import { Tag } from './tag';

export interface IBaseNote extends Document {
  author: string;
  title: string;
  color: string;
  date: Date;
  tags: Tag[];
  reminder?: Date;
  project?: Project;
}

export interface IDefaultNote extends IBaseNote {
  variant: 'default';
  description: string;
}

export interface IChecklistNote extends IBaseNote {
  variant: 'checklist';
  items: { item: string; completed: boolean }[];
}

export type Note = IDefaultNote | IChecklistNote;

const noteSchema = new Schema<Note>(
  {
    author: { required: true, index: true, type: String },
    title: { required: true, index: true, type: String },
    variant: { required: true, type: String },
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

const NoteModel = (mongoose.models.Note ?? model<Note>('Note', noteSchema, 'notes')) as Model<Note>;

export default NoteModel;
