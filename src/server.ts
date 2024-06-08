import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

const port = 8080;

app.listen(port, () => {
  console.log("O servidor está rodando !");
});
