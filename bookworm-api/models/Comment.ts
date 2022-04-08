import { model, Schema, Document } from "mongoose";

export interface Comment extends Document {
  reviewId: number;
  userId: string;
  userName: string;
  date: string | Date;
  comment: string;
}

const commentSchema = new Schema({
  reviewId: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: Date.now,
  },
});

export default model<Comment>("commentSchema", commentSchema);
