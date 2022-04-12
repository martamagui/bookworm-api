import { Request, Response } from "express";
//Internal
import Review from "../../models/Review";

class ReviewPutController {
  public async editReview(req: Request, res: Response) {
    try {
      const review = await Review.findByIdAndUpdate(
        { _id: req.params.reviewId },
        {
          $set: req.body.password,
        }
      );
      if (review) {
        return res.status(400).json({ message: "Ok" });
      }
      return res.status(404).json({ message: "Review not found." });
    } catch (error) {
      return res.status(400).json({ message: "Error." });
    }
  }
}

export default new ReviewPutController();
