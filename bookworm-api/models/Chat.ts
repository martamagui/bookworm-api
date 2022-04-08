import { model, Schema, Document } from "mongoose";

export interface Chat extends Document {
  chatId: string;
  users: [string];
  messages: [object];
}

const chatSchema = new Schema({
  chatId: {
    type: String,
    required: true,
    unique: true,
  },
  users: {
    type: [String],
    required: true,
  },
  messages: {
    user: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
});

export default model<Chat>("chatSchema", chatSchema);
