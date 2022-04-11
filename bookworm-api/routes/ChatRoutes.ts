import { Router, Request, Response } from "express";
//Inner imports
import ChatGetController from "../controllers/chat/get/chatGet";
import ChatPostController from "../controllers/chat/post/chatPost";
import ChatPutController from "../controllers/chat/put/chatPut";

export class ChatRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.gets();
    this.post();
    this.put();
  }

  private gets() {
    this.router.get(
      "/chat/user-chat-list/:userId",
      (req: Request, res: Response) => {
        ChatGetController.findChatsByUserId(req, res);
      }
    );
    this.router.get("/chat/:chatId", (req: Request, res: Response) => {
      ChatGetController.byChatId(req, res);
    });
  }
  private post() {
    this.router.post("/chat", (req: Request, res: Response) => {
      ChatPostController.chatPost(req, res);
    });
  }
  private put() {
    this.router.post("/chat/message/:chatId", (req: Request, res: Response) => {
      ChatPutController.sendMessage(req, res);
    });
  }
}
