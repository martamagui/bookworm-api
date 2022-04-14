import { Request, Response, NextFunction } from "express";

export const userValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.token._id != req.params.userId) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  next();
};
