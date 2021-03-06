import { Router, Request, Response } from "express";
//Inner imports
import ChatGetController from "../controllers/chat/chatGet";
import ChatPostController from "../controllers/chat/chatPost";
import ChatPutController from "../controllers/chat/chatPut";
//Middlewares
import { userValidatorParams } from "../middleware/token/userValidatorParams";
import { userExtractor } from "../middleware/token/userExtractor";
import { userValidatorChat } from "../middleware/token/userValidatorChat";


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
      userExtractor,
      userValidatorParams,
      (req: Request, res: Response) => {
        ChatGetController.findChatsByUserId(req, res);
      }
    );
    this.router.get("/chat/:chatId", (req: Request, res: Response) => {
      ChatGetController.byChatId(req, res);
    });
  }
  private post() {
    this.router.post("/chat", userExtractor,
    userValidatorChat ,
    (req: Request, res: Response) => {
      ChatPostController.chatPost(req, res);
    });
  }
  private put() {
    this.router.post(
      "/chat/message/:chatId",
      userExtractor,
      userValidatorChat,
      (req: Request, res: Response) => {
        ChatPutController.sendMessage(req, res);
      }
    );
  }
}
