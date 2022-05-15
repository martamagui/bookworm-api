import { model, Schema, Document } from "mongoose";

export interface Review extends Document {
  userId: string;
  boookTitle: string;
  bookAuthor: string;
  score: number;
  image: string;
  reviewDescription: string;
  date: string | Date;
  likes: [string];
  hastags: [string];
}

const reviewSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  boookTitle: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  amazonLink: {
    type: String,
    required: true,
  },
  reviewDescription: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: Date.now,
  },
  likes: {
    type: [String],
    required: false,
  },
  hastags: {
    type: [String],
    required: true,
  },
});

export default model<Review>("review", reviewSchema);
