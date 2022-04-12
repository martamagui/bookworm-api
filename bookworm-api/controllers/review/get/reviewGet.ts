import { Request, Response } from "express";
import { finished } from "nodemailer/lib/xoauth2";
//Internal
import Review from "../../../models/Review";

class ReviewGetController {
  public async getAll(req: Request, res: Response) {
    try {
      const reviews = await Review.find();
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getByUser(req: Request, res: Response) {
    try {
      const reviews = await Review.find({
        userId: req.params.userId,
      });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getByTitle(req: Request, res: Response) {
    try {
      const reviews = await Review.find({
        boookTitle: { $regex: req.params.boookTitle, $options: "i" },
      });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }

  public async getByBookAuthor(req: Request, res: Response) {
    try {
      const reviews = await Review.find({
        bookAuthor: { $regex: req.params.bookAuthor, $options: "i" },
      });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
  public async getByHastag(req: Request, res: Response) {
    try {
      const reviews = await Review.find({
        hastags: req.params.hastags,
      });
      if (reviews) {
        return res.status(200).json(reviews);
      }
      return res.status(404).json({ message: "Reviews not found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error. Check console log." });
    }
  }
}

export default new ReviewGetController();
