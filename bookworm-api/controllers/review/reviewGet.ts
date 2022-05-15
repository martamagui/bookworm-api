import { Request, Response } from "express";
//Internal
import Review from "../../models/Review";
import User from "../../models/User";

class ReviewGetController {
  public async getAll(req: Request, res: Response) {
    try {
      const reviews = await Review.find()
        .sort({ date: -1 })
        .populate({
          path: "userId",
          model: User,
          select: { userName: 1, avatar: 1 },
        });
      const savedReviews = await User.findById(req.body.token._id);
      if (reviews) {
        let reviewList: {
          _id: any;
          userId: any;
          boookTitle: any;
          bookAuthor: any;
          score: any;
          image: any;
          reviewDescription: any;
          date: any;
          likesAmount: any;
          liked: any;
          saved: boolean | undefined;
          hastags: any;
        }[] = [];
        reviews.forEach((element) => {
          let review = {
            _id: element._id,
            userId: element.userId,
            boookTitle: element.boookTitle,
            bookAuthor: element.bookAuthor,
            score: element.score,
            image: element.image,
            reviewDescription: element.reviewDescription,
            date: element.date,
            likesAmount: element.likes.length,
            liked: element.likes.includes(req.body.token),
            saved: savedReviews?.savedReviewsIds.includes(element._id),
            hastags: element.hastags,
          };
          reviewList.push(review);
        });
        return res.status(200).json(reviewList);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const review = await Review.findById({
        _id: req.params.id,
      }).populate({
        path: "userId",
        model: User,
        select: { userName: 1, avatar: 1 },
      });
      const savedReviews = await User.findById(req.body.token._id);
      if (review) {
        let object = {
          _id: review._id,
          userId: review.userId,
          boookTitle: review.boookTitle,
          bookAuthor: review.bookAuthor,
          score: review.score,
          image: review.image,
          reviewDescription: review.reviewDescription,
          date: review.date,
          likesAmount: review.likes.length,
          liked: review.likes.includes(req.body.token),
          saved: savedReviews?.savedReviewsIds.includes(review._id),
          hastags: review.hastags,
        };
        return res.status(200).json(object);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getByUser(req: Request, res: Response) {
    try {
      const reviews = await Review.find({
        userId: req.params.userId,
      })
        .sort({ date: -1 })
        .populate({
          path: "userId",
          model: User,
          select: { userName: 1, avatar: 1 },
        });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getByTitle(req: Request, res: Response) {
    try {
      const reviews = await Review.find({
        boookTitle: { $regex: req.params.bookTitle, $options: "i" },
      }).sort({ date: -1 });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getByBookAuthor(req: Request, res: Response) {
    try {
      const reviews = await Review.find({
        bookAuthor: { $regex: req.params.bookAuthor, $options: "i" },
      }).sort({ date: -1 });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getByHastag(req: Request, res: Response) {
    try {
      const reviews = await Review.find({
        hastags: req.params.hastags,
      }).sort({ date: -1 });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}

export default new ReviewGetController();
