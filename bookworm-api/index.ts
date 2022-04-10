import express, { Application } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
//Routes
import { UserRoutes } from "./routes/UserRouter";

const app = express();

app.use(express.json());

const PORT = 3000; // TODO OR

class Index{
  app: Application

  constructor(){
    this.app = express();
    this.routes();
  }

  public routes(){
    this.app.use(new UserRoutes().router);
  }
}
