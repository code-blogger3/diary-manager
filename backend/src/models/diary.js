import mongoose from "mongoose";

const DiarySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    diaryImgUrl: String,
    text: { type: String, required: true },
    category: [{ type: String }],
  },
  { timestamps: true }
);

export const DiaryModel = mongoose.model("Diary", DiarySchema);
