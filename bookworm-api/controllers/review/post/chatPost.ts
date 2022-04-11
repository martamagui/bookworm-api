import { Request, Response } from "express";
//Internal
import Chat from "../../../models/Chat";

class ChatPostController {
  public async chatPost(req: Request, res: Response) {
    try {
      const chat = new Chat(req.body);
      if (chat) {
        await chat.save();
        return res.status(200).json(chat);
      }
      return res.status(400).json("Malformed body.");
    } catch (error) {
      console.log(error);
      return res.status(400).json("Error. Check console log.");
    }
  }
}

export default new ChatPostController();
