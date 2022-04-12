import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import configuration from "../../configuration/configuration";
//Internal
import Review from "../../models/Review";

class ReviewPostController {
  public async reviewPost(req: Request, res: Response) {
    try {
      const review = new Review(req.body);
      if (review) {
        await review.save();
        return res.status(200).json(review);
      }
      return res.status(404).json({ message: "Error saving review." });
    } catch (error) {
      return res.status(404).json({ message: "Error saving review." });
    }
  }
}
export default new ReviewPostController();
