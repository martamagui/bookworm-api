import { Request, Response } from "express";
//Inner imports
import { generateToken } from "../../middleware/token/userEmmiter";
import User from "../../models/User";

class UserPostController {
  public async userPost(req: Request, res: Response) {
    try {
      let user = new User(req.body);
      if (user) {
        await user.save();
        return res.status(200).json(user);
      }
      return res.status(400).json({ message: "Error. Check console log." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const correctCombination = await user.compareDB(req.body.password);
        if (correctCombination) {
          return res
            .status(200)
            .json({ token: generateToken(user._id, user.email) });
        } else {
          return res.status(401).json({ message: "Unauthorized" });
        }
      }
      return res.status(401).json({ message: "Unauthorized" });
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
}

export default new UserPostController();
