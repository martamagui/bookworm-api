import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import configuration from "../../configuration/configuration";

export const userExtractor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth = req.headers.authorization;
    if (auth == null) {
      return res.status(401).json({ message: "Unauthorized." });
    }
    if (auth.toLowerCase().startsWith("bearer")) {
      const token = auth.slice("bearer".length).trim();
      if (jwt.verify(token, configuration.TOKEN_KEY)) {
        const decoded = jwt_decode(token);
        const parsedToken = JSON.parse(JSON.stringify(decoded));
        req.body.token = parsedToken;
        //console.log(req.body.token);
      } else {
        return res.status(401).json({ message: "Unauthorized." });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized." });
  }
  next();
};
