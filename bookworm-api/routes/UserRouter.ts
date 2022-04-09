import { Router, Request, Response } from "express";
//Inner imports
import UserGetController from "./../controllers/user/get/userGet";
import UserPostController from "./../controllers/user/post/userPost";
import UserDeleteController from "../controllers/user/delete/userDelete";

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
    this.router.get("/user/list", (req: Request, res: Response) => {
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
    //----------------- PUT
    //----------------- DELETE
    this.router.delete("/user", (req: Request, res: Response) => {
      UserDeleteController.delete(req, res);
    });
  }
}
