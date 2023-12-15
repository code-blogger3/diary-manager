import express from "express";
import { signUp } from "../controllers/user.js";

const router = express.Router();

router.post("/signUp", signUp);

export { router as userRouter };
