import { Router, Request, Response } from "express";
//Inner imports
import ReviewGetController from "../controllers/review/reviewGet";
import ReviewPostController from "../controllers/review/reviewPost";
import ReviewPutController from "../controllers/review/reviewPut";
import ReviewDeleteController from "../controllers/review/reviewDelete";
//Middlewares
import { userExtractor } from "./../middleware/token/userExtractor";
import { userValidatorBody } from "../middleware/token/userValidatorBody";

export class ReviewRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.gets();
    this.post();
    this.put();
    this.delete();
  }

  private gets() {
    this.router.get("/review", (req: Request, res: Response) => {
      ReviewGetController.getAll(req, res);
    });

    this.router.get(
      "/review/:id",
      userExtractor,
      (req: Request, res: Response) => {
        ReviewGetController.getById(req, res);
      }
    );

    this.router.get(
      "/review/author/:bookAuthor",
      (req: Request, res: Response) => {
        ReviewGetController.getByBookAuthor(req, res);
      }
    );
    this.router.get("/review/hastag/:hastag", (req: Request, res: Response) => {
      ReviewGetController.getByHastag(req, res);
    });
    this.router.get(
      "/review/title/:bookTitle",
      (req: Request, res: Response) => {
        ReviewGetController.getByTitle(req, res);
      }
    );
    this.router.get("/review/user/:userId", (req: Request, res: Response) => {
      ReviewGetController.getByUser(req, res);
    });
  }

  private post() {
    this.router.post(
      "/review",
      userExtractor,
      (req: Request, res: Response) => {
        ReviewPostController.reviewPost(req, res);
      }
    );
  }

  private put() {
    this.router.put(
      "/review/like/:reviewId",
      userExtractor,
      (req: Request, res: Response) => {
        ReviewPutController.likeDislikeReview(req, res);
      }
    );
  }

  private delete() {
    this.router.delete(
      "/review/:chatId",
      userExtractor,
      userValidatorBody,
      (req: Request, res: Response) => {
        ReviewDeleteController.delete(req, res);
      }
    );
  }
}
