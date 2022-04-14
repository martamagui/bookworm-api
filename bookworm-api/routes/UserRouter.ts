import { userExtractor } from "./../middleware/token/userExtractor";
import { Router, Request, Response } from "express";
//Inner imports
import UserGetController from "../controllers/user/userGet";
import UserPostController from "../controllers/user/userPost";
import UserDeleteController from "../controllers/user/userDelete";
import UserPutController from "../controllers/user/userPut";
import { userValidator } from "../middleware/token/userValidator";

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
    this.router.get("/user", (req: Request, res: Response) => {
      UserGetController.unfiltered(req, res);
    });
    this.router.get("/user/:userId", (req: Request, res: Response) => {
      UserGetController.byId(req, res);
    });
    this.router.get(
      "/user/myProfile/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserGetController.myProfile(req, res);
      }
    );

    this.router.get("/user/list-ids", (req: Request, res: Response) => {
      UserGetController.byIdsArray(req, res);
    });
    this.router.get(
      "/user/list-names/:userName",
      (req: Request, res: Response) => {
        UserGetController.byName(req, res);
      }
    );
    //Utils
    this.router.get(
      "/user/is-username-taken/:userName",
      (req: Request, res: Response) => {
        UserGetController.isUserNameTaken(req, res);
      }
    );
    this.router.get(
      "/user/is-email-taken/:email",
      (req: Request, res: Response) => {
        UserGetController.isEmailTaken(req, res);
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
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.modifyPassword(req, res);
      }
    );
    this.router.put(
      "/user/update-email/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.modifyEmail(req, res);
      }
    );
    this.router.put(
      "/user/update-description/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.modifyProfileDescription(req, res);
      }
    );
    this.router.put(
      "/user/update-avatar/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.modifyAvatar(req, res);
      }
    );
    this.router.put(
      "/user/update-userName/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.modifyUserName(req, res);
      }
    );
    this.router.put(
      "/user/follow/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.follow(req, res);
      }
    );
    this.router.put(
      "/user/unfollow/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.unfollow(req, res);
      }
    );
    this.router.put(
      "/user/update-newsletter/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.subscribeUnsubscribeToNewsLetter(req, res);
      }
    );
    this.router.put(
      "/user/saveReview/:reviewId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.saveReview(req, res);
      }
    );
    this.router.put(
      "/user/removeSavedReview/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserPutController.removeSavedReview(req, res);
      }
    );
  }

  private delete() {
    this.router.delete(
      "/user/:userId",
      userExtractor,
      userValidator,
      (req: Request, res: Response) => {
        UserDeleteController.delete(req, res);
      }
    );
  }
}
