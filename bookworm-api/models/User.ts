import { model, Schema, Document } from "mongoose";

export interface User extends Document {
  //Required
  userName: string;
  fullName: string;
  email: string;
  password: string;
  birthDate: string | Date;
  country: string;
  city: string;
  address: string;
  //Profile
  description: string;
  avatar: string;
  reviews: [string];
  following: [string];
  //Other
  subscribedToNewsLetter: boolean;
  savedReviewsIds: [number];
}

const userSchema = new Schema({
  //Required
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  //Profile
  description: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  reviews: {
    type: [String],
    required: true,
  },
  following: {
    type: [String],
    required: true,
  },
  //Other
  subscribedToNewsLetter: {
    type: Boolean,
    required: true,
  },
  savedReviewsIds: {
    type: [Number],
  },
});

export default model<User>("user", userSchema);
