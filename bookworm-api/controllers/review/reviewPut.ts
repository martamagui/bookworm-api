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
        let query = {};
        if (review?.likes.includes(req.body.token._id)) {
          query = { $pull: { likes: req.body.token._id } };
        } else {
          query = { $push: { likes: req.body.token._id } };
        }
        const like = await Review.findByIdAndUpdate(
          {
            _id: req.params.reviewId,
          },
          query
        );
        if (like) {
          return res.status(400).json({ message: "Ok" });
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
