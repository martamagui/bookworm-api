import { connect } from "mongoose";
//Internal
import configuration from "../configuration/configuration";

export const dbConnection = connect(configuration.DB_CONN);
