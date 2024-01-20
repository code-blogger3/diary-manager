import express from "express";
import { postDiary, sendUserDiary, updateDiary } from "../controllers/diary.js";

const router = express.Router();

router.get("/:userID", sendUserDiary);
router.put("/:diaryID", updateDiary);
router.post("/:userID", postDiary);

export { router as diaryRouter };
