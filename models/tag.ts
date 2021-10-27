import mongoose, { model, Schema, Document } from "mongoose";

export interface Tag extends Document {
  name: string;
  color: string;
}

const tagSchema = new Schema<Tag>(
  {
    name: { required: true, index: true, type: String },
    color: { required: true, type: String },
  },
  { versionKey: false }
);

export default mongoose.models.Tag || model<Tag>("Tag", tagSchema, "tags");
