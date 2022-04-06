import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface Tag extends Document {
  author: string;
  name: string;
  color: string;
}

const tagSchema = new Schema<Tag>(
  {
    author: { required: true, index: true, type: String },
    name: { required: true, index: true, type: String },
    color: { required: true, type: String },
  },
  { versionKey: false },
);

const TagModel = (mongoose.models.Tag ?? model<Tag>('Tag', tagSchema, 'tags')) as Model<Tag>;

export default TagModel;
