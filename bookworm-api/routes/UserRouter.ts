import { Router, Request, Response } from "express";
//Inner imports
import UserGetController from "./../controllers/user/get/userGet";
import UserPostController from "./../controllers/user/post/userPost";
import UserDeleteController from "../controllers/user/delete/userDelete";
import UserPutController from "../controllers/user/put/userPut";

export class UserRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    //----------------- GET
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

    //----------------- POST
    this.router.post("/user", (req: Request, res: Response) => {
      UserPostController.userPost(req, res);
    });

    //----------------- DELETE
    this.router.delete("/user//:userId", (req: Request, res: Response) => {
      UserDeleteController.delete(req, res);
    });

    //----------------- PUT
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
    this.router.put(
      "/user/update-following/:userId",
      (req: Request, res: Response) => {
        UserPutController.modifyFollowing(req, res);
      }
    );
    this.router.put(
      "/user/update-newsletter/:userId",
      (req: Request, res: Response) => {
        UserPutController.subscribeUnsubscribeToNewsLetter(req, res);
      }
    );
    this.router.put(
      "/user/update-savedReviews/:userId",
      (req: Request, res: Response) => {
        UserPutController.modifySavedReviews(req, res);
      }
    );
  }
}
