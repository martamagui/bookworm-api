import { Router, Request, Response } from "express";
//Inner imports
import CommentDeleteController from "../controllers/comment/deleteComment";
import CommentGetController from "../controllers/comment/getComment";
import CommentPostController from "../controllers/comment/postComment";
import { userExtractor } from "../middleware/token/userExtractor";
import { userValidatorBody } from "../middleware/token/userValidatorBody";
//Middlewares

export class CommentRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.get();
    this.post();
    this.delete();
  }

  private get() {
    this.router.get(
      "review/comment/:reviewId",
      (req: Request, res: Response) => {
        CommentGetController.getCommentbyPost(req, res);
      }
    );
  }

  private post() {
    this.router.post(
      "review/comment",
      userExtractor,
      userValidatorBody,
      (req: Request, res: Response) => {
        CommentPostController.post(req, res);
      }
    );
  }

  private delete() {
    this.router.delete(
      "review/comment",
      userExtractor,
      userValidatorBody,
      (req: Request, res: Response) => {
        CommentDeleteController.delete(req, res);
      }
    );
  }
}
