import { Request, Response } from "express";
//Internal
import Chat from "../../models/Chat";

class ChatGetController {
  public async byChatId(req: Request, res: Response) {
    try {
      const chat = await Chat.findById(req.params.chatId);
      if (chat) {
        return res.status(200).json(chat);
      }
      return res.status(404).json({ message: "Not found." });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "Not found." });
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
      return res.status(404).json({ message: "Not found." });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "Not found." });
    }
  }
}

export default new ChatGetController();
