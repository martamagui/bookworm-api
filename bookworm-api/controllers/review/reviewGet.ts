import { Request, Response } from "express";
//Internal
import Review from "../../models/Review";
import User from "../../models/User";

class ReviewGetController {
  private gridSelection = ["_id", "image", "bookTitle"];
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
          id: any;
          userId: any;
          bookTitle: any;
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
            id: element._id,
            userId: element.userId,
            bookTitle: element.bookTitle,
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
          bookTitle: review.bookTitle,
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
        bookTitle: { $regex: req.params.bookTitle, $options: "i" },
      })
        .sort({ date: -1 })
        .select(this.gridSelection);
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
      })
        .sort({ date: -1 })
        .select(this.gridSelection);
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
      const reviews = await Review.aggregate([
        { $match: { hashtags: { $in: [req.params.hashtag] } } },
      ]).sort({ date: -1 });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getTopBooks(req: Request, res: Response) {
    try {
      //TODO limit to one month ago
      const oneMonthAgo = this.oneMonthAgo();
      const reviews: { _id: any; reviews: any[] }[] = await Review.aggregate([
        { $sort: { date: -1 } },
        {
          $group: {
            _id: "$bookTitle",
            reviews: { $push: "$$ROOT" },
            total: { $sum: 1 },
          },
        },
        { $sort: { total: -1 } },
        { $limit: 3 },
      ]);
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  oneMonthAgo() {
    var d = new Date();
    var targetMonth = d.getMonth() - 1;
    d.setMonth(targetMonth);
    if (d.getMonth() !== targetMonth % 12) {
      d.setDate(0); // last day of previous month
    }
    return d;
  }
}

export default new ReviewGetController();
