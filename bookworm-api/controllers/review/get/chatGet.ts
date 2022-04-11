import { Request, Response } from "express";
//Internal
import Chat from "../../../models/Chat";

class ChatGetController {
  public async byId(req: Request, res: Response) {
    try {
      const chat = await Chat.findById(req.params.chatId);
      if (chat) {
        return res.status(200).json(chat);
      }
      return res.status(404).json({ message: "Chat not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
  public async findChatsByUserId(req: Request, res: Response) {
    try {
      const chatList = await Chat.find({
        users: { $all: [req.query.userIds] },
      });
      if (chatList) {
        return res.status(200).json(chatList);
      }
      return res.status(404).json({ message: "Chat not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}

export default new ChatGetController();
