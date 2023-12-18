import express from "express";
import { postDiary, sendUserDiary } from "../controllers/diary.js";

const router = express.Router();

router.get("/:userID", sendUserDiary);
router.post("/", postDiary);

export { router as diaryRouter };
