import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

//routes import

app.use("/api/auth", userRouter);

export { app };
