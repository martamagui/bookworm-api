import { Router, Request, Response } from "express";
//Inner imports
import UserGetController from "../controllers/user/userGet";
import UserPostController from "../controllers/user/userPost";
import UserDeleteController from "../controllers/user/userDelete";
import UserPutController from "../controllers/user/userPut";

export class UserRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.gets();
    this.post();
    this.put();
    this.delete();
  }

  private gets() {
    this.router.get("/user/:userId", (req: Request, res: Response) => {
      UserGetController.byId(req, res);
    });
    this.router.get("/user/email/:email", (req: Request, res: Response) => {
      UserGetController.byEmail(req, res);
    });
    //List
    this.router.get("/user", (req: Request, res: Response) => {
      UserGetController.unfiltered(req, res);
    });
    this.router.get("/user/list-ids", (req: Request, res: Response) => {
      UserGetController.byIdsArray(req, res);
    });
    this.router.get(
      "/user/list-names/:userName",
      (req: Request, res: Response) => {
        UserGetController.byName(req, res);
      }
    );
  }

  private post() {
    this.router.post("/user", (req: Request, res: Response) => {
      UserPostController.userPost(req, res);
    });
    this.router.post("/user/login", (req: Request, res: Response) => {
      UserPostController.login(req, res);
    });
  }

  private put() {
    this.router.put(
      "/user/update-password/:userId",
      (req: Request, res: Response) => {
        UserPutController.modifyPassword(req, res);
      }
    );
    this.router.put(
      "/user/update-email/:userId",
      (req: Request, res: Response) => {
        UserPutController.modifyEmail(req, res);
      }
    );
    this.router.put(
      "/user/update-description/:userId",
      (req: Request, res: Response) => {
        UserPutController.modifyProfileDescription(req, res);
      }
    );
    this.router.put(
      "/user/update-avatar/:userId",
      (req: Request, res: Response) => {
        UserPutController.modifyAvatar(req, res);
      }
    );
    this.router.put(
      "/user/update-userName/:userId",
      (req: Request, res: Response) => {
        UserPutController.modifyUserName(req, res);
      }
    );
    this.router.put("/user/follow/:userId", (req: Request, res: Response) => {
      UserPutController.follow(req, res);
    });
    this.router.put("/user/unfollow/:userId", (req: Request, res: Response) => {
      UserPutController.unfollow(req, res);
    });
    this.router.put(
      "/user/update-newsletter/:userId",
      (req: Request, res: Response) => {
        UserPutController.subscribeUnsubscribeToNewsLetter(req, res);
      }
    );
    this.router.put(
      "/user/saveReview/:reviewId",
      (req: Request, res: Response) => {
        UserPutController.saveReview(req, res);
      }
    );
    this.router.put(
      "/user/removeSavedReview/:userId",
      (req: Request, res: Response) => {
        UserPutController.removeSavedReview(req, res);
      }
    );
  }

  private delete() {
    this.router.delete("/user/:userId", (req: Request, res: Response) => {
      UserDeleteController.delete(req, res);
    });
  }
}
