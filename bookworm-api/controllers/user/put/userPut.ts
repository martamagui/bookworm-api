import { Request, Response } from "express";
//Inner imports
import User from "../../../models/User";

class UserPutController {
  public async modifyPassword(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          password: req.body.password,
        }
      );
      if (user) {
        return res.status(200).json("ok");
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async modifyEmail(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          email: req.body.email,
        }
      );
      if (user) {
        return res.status(200).json("ok");
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async modifyProfileDescription(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          email: req.body.email,
        }
      );
      if (user) {
        return res.status(200).json("ok");
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async modifyAvatar(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          email: req.body.avatar,
        }
      );
      if (user) {
        return res.status(200).json("ok");
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async modifyUserName(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          email: req.body.userName,
        }
      );
      if (user) {
        return res.status(200).json("ok");
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async modifyFollowing(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          email: req.body.following,
        }
      );
      if (user) {
        return res.status(200).json("ok");
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async subscribeUnsubscribeToNewsLetter(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          email: req.body.subscribedToNewsLetter,
        }
      );
      if (user) {
        return res.status(200).json("ok");
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async modifySavedReviews(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          email: req.body.savedReviewsIds,
        }
      );
      if (user) {
        return res.status(200).json("ok");
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}
export default new UserPutController();
