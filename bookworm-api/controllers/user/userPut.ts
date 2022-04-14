import { Request, Response } from "express";
//Inner imports
import User from "../../models/User";

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
        return res.status(200).json({ message: "Ok" });
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
        return res.status(200).json({ message: "Ok" });
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
          description: req.body.description,
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
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
          avatar: req.body.avatar,
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async modifyBanner(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          banner: req.body.banner,
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
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
          userName: req.body.userName,
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async follow(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $push: {
            following: req.body.following,
          },
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async unfollow(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $pull: {
            following: req.body.following,
          },
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
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
          subscribedToNewsLetter: req.body.subscribedToNewsLetter,
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async saveReview(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $push: {
            savedReviewsIds: req.body.reviewId,
          },
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async removeSavedReview(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $pull: {
            savedReviewsIds: req.body.reviewId,
          },
        }
      );
      if (user) {
        return res.status(200).json({ message: "Ok" });
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}
export default new UserPutController();
