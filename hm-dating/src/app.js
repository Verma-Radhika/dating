import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {errorMiddleware} from './middlewares/error.js'

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import msgRouter from "./routes/message.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", msgRouter);

// error middleware
app.use(errorMiddleware)
// http://localhost:8000/api/v1/users/register

export { app };
