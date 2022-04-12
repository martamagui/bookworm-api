import { Request, Response } from "express";
//Internal
import Chat from "../../models/Chat";

class ChatPostController {
  public async chatPost(req: Request, res: Response) {
    try {
      const chat = new Chat(req.body);
      if (chat) {
        await chat.save();
        return res.status(200).json({ message: "Saved." });
      }
      return res.status(400).json({ message: "Malformed body." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error." });
    }
  }
}

export default new ChatPostController();
