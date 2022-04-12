import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

//Routes
import { UserRoutes } from "./routes/UserRouter";
import { ReviewRoutes } from "./routes/ReviewRoutes";
import { ChatRoutes } from "./routes/ChatRoutes";
//Configuration
import configuration from "./configuration/configuration";
import { dbConnection } from "./db/dbConnection";

class Index {
  app: Application;
  private apiV1 = "/api/v1";

  constructor() {
    this.app = express();
    this.generalConfiguration();
    this.startServer();
    this.routes();
  }

  public generalConfiguration() {
    dotenv.config();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public startServer() {
    const port = configuration.PORT;
    this.app.set("port", port);
    this.app.listen(port, () => {
      console.log("Server listening on port: ", port);
    });
  }

  public routes() {
    this.app.get("/", (req, res) => {
      res.send("invaild endpoint");
    });
    this.app.use(this.apiV1, new UserRoutes().router);
    this.app.use(this.apiV1, new ChatRoutes().router);
    this.app.use(this.apiV1, new ReviewRoutes().router);
  }
}

dbConnection.then(() => {
  console.log("Connected with DB.");
  console.log(configuration.PORT);
  new Index();
});
