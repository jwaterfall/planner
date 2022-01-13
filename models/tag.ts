import mongoose, { Document, Schema, model } from 'mongoose';

export interface ITag extends Document {
  name: string;
  color: string;
}

const tagSchema = new Schema<ITag>(
  {
    name: { required: true, index: true, type: String },
    color: { required: true, type: String },
  },
  { versionKey: false },
);

export default mongoose.models.Tag || model<ITag>('Tag', tagSchema, 'tags');
