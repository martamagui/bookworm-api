import { Request, Response } from "express";
//Internal
import Review from "../../models/Review";

class ReviewDeleteController {
  public async delete(req: Request, res: Response) {
    try {
      const review = await Review.findByIdAndDelete(req.params.chatId);
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
