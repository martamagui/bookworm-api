import { Request, Response } from "express";
//Internal
import Review from "../../models/Review";

class ReviewDeleteController {
  public async delete(req: Request, res: Response) {
    console.log(req.params);
    try {
      const review = await Review.findByIdAndDelete(req.params.reviewId);
      if (review) {
        return res.status(200).json({ message: "Deleted" });
      }
      return res.status(404).json({ message: "Review not found." });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "Review not found." });
    }
  }
}
export default new ReviewDeleteController();
