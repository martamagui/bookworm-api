import { model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import { decrypted } from "../middleware/cryptography/decrypted";

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
  compareDB: (password: string) => Boolean;
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

userSchema.pre<User>("save", async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(user.password, salt);
  user.password = hashPassword;
  next();
});

userSchema.methods.compareDB = async function (
  password: string
): Promise<Boolean> {
  return await decrypted(password, this.password);
};

export default model<User>("user", userSchema);
