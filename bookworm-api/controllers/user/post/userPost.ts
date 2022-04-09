import { Request, Response } from "express";

//Inner imports
import User from "../../../models/User";

export const userPost = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    if (user) {
      await user.save();
      return res.status(200).json(user);
    }
    return res.status(400).json("Malformed body.");
  } catch (error) {
    console.log(error);
    return res.status(400).json("Malformed body.");
  }
};
