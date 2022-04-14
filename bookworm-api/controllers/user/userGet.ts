import { Request, Response } from "express";
//Inner imports
import User from "../../models/User";

class UserGetController {
  private limitedInformation = [
    "_id",
    "userName",
    "description",
    "avatar",
    "following",
    "reviews",
  ];
  private listInformation = ["_id", "userName", "avatar"];
  //Individual
  public async byId(req: Request, res: Response) {
    try {
      const user = await User.findById(req.params.userId).select(
        this.limitedInformation
      );
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
  public async myProfile(req: Request, res: Response) {
    try {
      const user = await User.findById(req.params.userId);
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  //Lists
  public async unfiltered(_req: Request, res: Response) {
    try {
      const users = await User.find().select(this.listInformation);
      if (users) {
        return res.status(200).json(users);
      }
      return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async byIdsArray(req: Request, res: Response) {
    try {
      const users = await User.find({
        userName: { $all: [req.query.userIds] },
      }).select(this.listInformation);
      if (users) {
        return res.status(200).json(users);
      }
      return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async byName(req: Request, res: Response) {
    try {
      const users = await User.find({
        userName: { $regex: req.params.userName, $options: "i" },
      }).select(this.listInformation);
      if (users) {
        return res.status(200).json(users);
      }
      return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
  //Utils
  public async isEmailTaken(req: Request, res: Response) {
    try {
      const user = User.find({
        email: req.params.email,
      });
      if (!user) {
        return res.status(200).json({ message: "available" });
      }
      return res.status(200).json({ message: "unavailable" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
  public async isUserNameTaken(req: Request, res: Response) {
    try {
      const user = User.find({
        userName: req.params.userName,
      });
      if (!user) {
        return res.status(200).json({ message: "available" });
      }
      return res.status(200).json({ message: "unavailable" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}

export default new UserGetController();
