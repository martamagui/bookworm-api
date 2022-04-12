import { Request, Response } from "express";
//Internal
import Comment from "../../models/Comment";

class CommentGetController {
  public async getCommentbyPost(req: Request, res: Response) {
    try {
      const comments = await Comment.find({ reviewId: req.params.reviewId });
      if (comments) {
        return res.status(200).json(comments);
      }
      return res.status(404).json({ message: "Not found." });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "Not found." });
    }
  }
}

export default new CommentGetController();
