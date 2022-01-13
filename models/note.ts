import mongoose, { Document, Schema, model } from 'mongoose';

import { IProject } from './project';
import { ITag } from './tag';

export interface IBaseNote extends Document {
  title: string;
  color: string;
  date: Date;
  tags: ITag[];
  reminder?: Date;
  project?: IProject;
}

export interface IDefaultNote extends IBaseNote {
  variant: 'default';
  description: string;
}

export interface IChecklistNote extends IBaseNote {
  variant: 'checklist';
  items: { item: string; completed: boolean }[];
}

export type INote = IDefaultNote | IChecklistNote;

const noteSchema = new Schema<INote>(
  {
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

export default mongoose.models.Note ||
  model<INote>('Note', noteSchema, 'notes');
