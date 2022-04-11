import { Request, Response } from "express";
//Inner imports
import User from "../../../models/User";

class UserDeleteController {
  public async delete(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (user) {
        return res.status(202).json("User deleted");
      }
      return res.status(400).json({ message: "User not found." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}

export default new UserDeleteController();
