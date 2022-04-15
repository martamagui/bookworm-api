import { Request, Response, NextFunction } from "express";

export const userValidatorChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.token._id != req.body.messages.user) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  next();
};
