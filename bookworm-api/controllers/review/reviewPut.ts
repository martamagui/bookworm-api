import { Request, Response } from "express";
//Internal
import Review from "../../models/Review";

class ReviewPutController {
  public async likeDislikeReview(req: Request, res: Response) {
    console.log(req.body);
    try {
      const review = await Review.findById({
        _id: req.params.reviewId,
      });
      if (review) {
        if (review?.likes.includes(req.body.token._id)) {
          const like = await Review.findByIdAndUpdate(
            {
              _id: req.params.reviewId,
            },
            { $pull: { likes: req.body.token._id } }
          );
          if (like) {
            return res.status(400).json({ message: "Ok" });
          }
        } else {
          const like = await Review.findByIdAndUpdate(
            {
              _id: req.params.reviewId,
            },
            { $push: { likes: req.body.token._id } }
          );
          if (like) {
            return res.status(400).json({ message: "Ok" });
          }
        }
      }
      return res.status(404).json({ message: "Review not found." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error." });
    }
  }
}

export default new ReviewPutController();
