import { Request, Response } from "express";
//Internal
import Comment from "../../models/Comment";

class CommentDeleteController {
  public async delete(req: Request, res: Response) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params.commentId);
      if (comment) {
        return res.status(200).json({ message: "Deleted" });
      }
      return res.status(404).json({ message: "Not found." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error." });
    }
  }
}
export default new CommentDeleteController();
