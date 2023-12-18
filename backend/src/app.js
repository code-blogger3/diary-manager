import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.js";
import { diaryRouter } from "./routes/diary.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

//routes import

app.use("/api/auth", userRouter);
app.use("/api/diary", diaryRouter);

export { app };
