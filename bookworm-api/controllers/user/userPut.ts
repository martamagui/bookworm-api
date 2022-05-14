import { Request, Response } from "express";
//Inner imports
import User from "../../models/User";

class UserPutController {
  public async modifyPassword(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.body.token._id },
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
        { _id: req.body.token._id },
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
        { _id: req.body.token._id },
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
        { _id: req.body.token._id },
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
        { _id: req.body.token._id },
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
        { _id: req.body.token._id },
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
      const me = await User.findById({ _id: req.body.token._id });
      console.log(me);
      if (me && req.body.token._id != req.params.userId) {
        let query = {};
        if (me.following.includes(req.params.userId)) {
          query = {
            $pull: {
              following: req.params.userId,
            },
          };
        } else {
          query = {
            $push: {
              following: req.params.userId,
            },
          };
        }
        console.log(query);
        const user = await User.findOneAndUpdate(
          { _id: req.body.token._id },
          query
        );
        if (user) {
          return res.status(200).json({ message: "Ok" });
        }
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
        { _id: req.body.token._id },
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
      const user = await User.findById({ _id: req.body.token._id });
      if (user) {
        let query = {};
        if (user.savedReviewsIds.includes(req.params.reviewId)) {
          query = { $pull: { savedReviewsIds: req.params.reviewId } };
        } else {
          query = { $push: { savedReviewsIds: req.params.reviewId } };
        }
        const updated = await User.findByIdAndUpdate(
          { _id: req.body.token._id },
          query
        );
        if (updated) {
          return res.status(200).json({ message: "Ok" });
        }
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}
export default new UserPutController();
