import { Router, Request, Response } from "express";
//Inner imports
import CommentDeleteController from "../controllers/comment/deleteComment";
import CommentGetController from "../controllers/comment/getComment";
import CommentPostController from "../controllers/comment/postComment";

export class CommentRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.get();
    this.post();
    this.delete();
  }
  private get() {
    this.router.get("review/comment", (req: Request, res: Response) => {
      CommentGetController.getCommentbyPost(req, res);
    });
  }
  private post() {
    this.router.post("review/comment", (req: Request, res: Response) => {
      CommentPostController.post(req, res);
    });
  }

  private delete() {
    this.router.delete("review/comment", (req: Request, res: Response) => {
      CommentDeleteController.delete(req, res);
    });
  }
}
