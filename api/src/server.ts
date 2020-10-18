import express from "express";

import path from "path";
import cors from "cors";
import "express-async-errors";
import errorHandler from "./errors/handler";
import "./database/connection";
import routesUser from "./modules/User/http/Routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routesUser);
app.use(errorHandler);

app.listen(3333, () => console.log("BackEnd Started in http://localhost:3333"));
