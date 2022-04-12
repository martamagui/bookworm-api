import { Request, Response } from "express";
//Internal
import Comment from "../../models/Comment";
import reviewDelete from "../review/reviewDelete";

class CommentPostController {
  public async post(req: Request, res: Response) {
    try {
      const comment = new Comment(req.body);
      if (comment) {
        await comment.save();
        return res.status(200).json({ message: "Saved." });
      }
      return res.status(400).json("Malformed body.");
    } catch (error) {
      return res.status(400).json({ message: "Error." });
    }
  }
}
export default new CommentPostController();
