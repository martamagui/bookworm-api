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
        let today = this.today();
        review.userId = req.body.token._id;
        await review.save();
        return res.status(200).json(review);
      }
      return res.status(404).json({ message: "Error saving review." });
    } catch (error) {
      return res.status(404).json({ message: "Error saving review." });
    }
  }
  today() {
    var d = new Date();
    return d;
  }
}
export default new ReviewPostController();
