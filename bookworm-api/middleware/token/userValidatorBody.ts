import { Request, Response, NextFunction } from "express";

export const userValidatorBody = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.token._id != req.body.userId) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  next();
};
