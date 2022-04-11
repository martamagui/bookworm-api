import { Request, Response } from "express";
//Inner imports
import User from "../../../models/User";

class UserGetController {
  //Individual
  public async byId(req: Request, res: Response) {
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

  public async byEmail(req: Request, res: Response) {
    try {
      const user = await User.findOne({ email: req.params.email });
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
      const users = await User.find();
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
      });
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
      });
      if (users) {
        return res.status(200).json(users);
      }
      return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}

export default new UserGetController();
