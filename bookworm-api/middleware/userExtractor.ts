import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import configuration from "../configuration/configuration";

export const userExtractor = (req: Request, res: Response) => {
  try {
    const auth = req.headers.authorization;
    if (auth == null) {
      return "Invalid authorization or Token";
    }
    if (auth.toLowerCase().startsWith("bearer")) {
      const token = auth.slice("bearer".length).trim();

      if (jwt.verify(token, configuration.TOKEN_KEY)) {
        const decoded = jwt_decode(req.params.token);
        const parsedToken = JSON.parse(JSON.stringify(decoded));
        return parsedToken._id;
      } else {
        return res.status(401).json({ message: "Unauthorized." });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized." });
  }
};
