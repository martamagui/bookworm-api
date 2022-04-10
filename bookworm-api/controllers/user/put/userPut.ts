import { Request, Response } from "express";
//Inner imports
import User from "../../../models/User";

class UserPutController {
  //TODO modify pass
  public async updatePassword(req: Request, res: Response) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          password: req.body.password,
        }
      );
    } catch (error) {}
  }
  //TODO modify email
  //TODO modify profileDescription
  //TODO modify avatar
  //TODO modify userName
  //TODO unfollowUser
  //TODO modify followUser
  //TODO modify subscriberdToNewsLetter
}
export default new UserPutController();
