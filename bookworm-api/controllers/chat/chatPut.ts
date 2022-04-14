import { Request, Response } from "express";
//Internal
import Chat from "../../models/Chat";

class ChatPutController {
  public async sendMessage(req: Request, res: Response) {
    try {
      const chat = await Chat.findOneAndUpdate(
        {
          _id: req.params.chatId,
        },
        {
          $push: { messages: req.body.message },
        }
      );
      if (chat) {
        return res.status(200).json({ message: "ok" });
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}
export default new ChatPutController();
