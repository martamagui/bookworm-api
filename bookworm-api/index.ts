import express, { Application } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv, { config } from "dotenv";
//Routes
import { UserRoutes } from "./routes/UserRouter";


class Index{
  app: Application

  constructor(){
    this.app = express();
    this.routes();
    this.generalConfiguration();
  }
  public generalConfiguration(){
    dotenv.config();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}))
  }
  public configuration(){
    const port = config.PORT;
    this.app.set("port", port);
    this.app.listen(port, () => {
      console.log("Server listening on port: ", port);
    });

  }

  public dbConfig(){
    console.log("Connection stablished with MongoDB");
    new Index();
  }

  public routes(){
    this.app.use(new UserRoutes().router);
  }


}
new Index();