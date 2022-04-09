import { Request, Response } from "express";
//Inner imports
import User from "../../../models/User";

//Lists
export const unfilteredUserList = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    if (users) {
      return res.status(200).json(users);
    }
    return res.status(404).json("No users were found.");
  } catch (error) {
    console.log(error);
    return res.status(400).json("Request error.");
  }
};
//TODO user byEmail, userListByName, userbyIdArray

//One
export const userById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json("No user was found.");
  } catch (error) {
    console.log(error);
    return res.status(400).json("Request error.");
  }
};
