import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

//Routes
import { UserRoutes } from "./routes/UserRouter";
import configuration from "./configuration/configuration";
import { dbConnection } from "./db/dbConnection";

class Index {
  app: Application;

  constructor() {
    this.app = express();
    this.routes();
    this.generalConfiguration();
  }

  public generalConfiguration() {
    dotenv.config();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public configuration() {
    const port = configuration.PORT;
    this.app.set("port", port);
    this.app.listen(port, () => {
      console.log("Server listening on port: ", port);
    });
  }

  public routes() {
    this.app.use(new UserRoutes().router);
  }
}

dbConnection.then(() => {
  console.log("Connected with DB.");
  new Index();
});
