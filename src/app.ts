import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { ErrorMiddleware } from "./middlewares/error.middleware";

const app = express();

process.on("uncaughtException", ErrorMiddleware.handleUncaughtException);
process.on("unhandledRejection", ErrorMiddleware.handleUnhandledRejection);

app.use(cors());
app.use(express.json());
app.use(ErrorMiddleware.handleError);

export default app;
