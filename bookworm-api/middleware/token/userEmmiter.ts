import { Request } from "express";
import { sign, SignOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import configuration from "../../configuration/configuration";

export function generateToken(_id: string, email: string) {
  const payload = {
    _id: _id,
    email: email,
  };
  return jwt.sign(payload, configuration.TOKEN_KEY, {
    expiresIn: 86400,
  });
}
