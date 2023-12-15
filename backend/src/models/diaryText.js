import mongoose from "mongoose";

const DiaryTextSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    relatedDiaryID: { type: String },
  },
  { timestamps: true }
);

export const DiaryTextModel = mongoose.model("DiaryText", DiaryTextSchema);
