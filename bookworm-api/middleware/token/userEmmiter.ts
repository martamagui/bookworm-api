import { Request } from "express";
import { sign, SignOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import configuration from "../../configuration/configuration";

export function generateToken() {
  //TODO take in params ID y mail to create the custom token
  const payload = {
    _id: "123456789",
    email: "mail@mail.com",
  };
  return jwt.sign(payload, configuration.TOKEN_KEY, {
    expiresIn: 86400,
  });
}
