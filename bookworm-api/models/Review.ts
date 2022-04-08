import { model, Schema, Document } from "mongoose";

export interface Review extends Document {
  id: number;
  userId: string;
  boookTitle: string;
  bookAuthor: string;
  score: number;
  image: string;
  amazonLink: string;
  reviewDescription: string;
  date: string | Date;
  likes: number;
  hastags: [string];
}
const reviewSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
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
    type: Number,
    required: true,
  },
  hastags: {
    type: [String],
    required: true,
  },
});

export default model<Review>("reviewDetail", reviewSchema);
