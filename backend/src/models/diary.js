import mongoose from "mongoose";

const DiarySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    DiaryImgUrl: { type: String },
    category: [{ type: String }],
  },
  { timestamps: true }
);

export const DiaryModel = mongoose.model("Diary", DiarySchema);
