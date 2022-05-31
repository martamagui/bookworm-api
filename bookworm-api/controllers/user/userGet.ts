import { Request, Response } from "express";
//Inner imports
import User from "../../models/User";
import Review from "../../models/Review";

class UserGetController {
  private limitedInformation = [
    "_id",
    "userName",
    "description",
    "avatar",
    "banner",
    "following",
  ];
  private listInformation = ["_id", "userName", "avatar"];
  //Individual
  public async byId(req: Request, res: Response) {
    try {
      const user = await User.findById(req.params.userId).select(
        this.limitedInformation
      );
      const userPost = await Review.find({
        userId: req.params.userId,
      }).select(["_id", "image"]);

      let postList: { id: any; image: any }[] = [];
      userPost.forEach((element) => {
        let post = {
          id: element._id,
          image: element.image,
        };
        postList.push(post);
      });

      const followers = await User.find({
        following: req.params.userId,
      }).count();
      if (user) {
        let response = {
          _id: user?.id,
          userName: user?.userName,
          description: user?.description,
          banner: user?.banner,
          avatar: user?.avatar,
          followingAmount: user?.following.length,
          followers: followers,
          reviews: userPost,
          isMe: user?.id == req.body.token._id,
        };

        return res.status(200).json(response);
      }
      return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async myProfile(req: Request, res: Response) {
    try {
      const user = await User.findById(req.body.token._id).select(
        this.limitedInformation
      );
      const userPost = await Review.find({
        userId: req.body.token._id,
      }).select(["_id", "image"]);

      let postList: { id: any; image: any }[] = [];
      userPost.forEach((element) => {
        let post = {
          id: element._id,
          image: element.image,
        };
        postList.push(post);
      });

      const followers = await User.find({
        following: req.params.userId,
      }).count();

      if (user) {
        let response = {
          _id: user?.id,
          userName: user?.userName,
          description: user?.description,
          avatar: user?.avatar,
          followingAmount: user?.following.length,
          followers: followers,
          reviews: userPost,
          isMe: user?.id == req.body.token._id,
        };
        return res.status(200).json(response);
      }
      return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async mySavedPosts(req: Request, res: Response) {
    try {
      const user = await User.findById(req.body.token._id)
        .select(["savedReviewsIds"])
        .populate({
          path: "savedReviewsIds",
          model: Review,
          select: { id: 1, image: 1 },
        });
      if (user) {
        let savedReviews = user.savedReviewsIds;
        return res.status(200).json(savedReviews);
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
      if ((await user).length == 0) {
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
      if ((await user).length == 0) {
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
