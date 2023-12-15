import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    diaryID: [{ type: mongoose.Schema.Types.ObjectId, ref: "Diary" }],
    diaryTextID: [{ type: mongoose.Schema.Types.ObjectId, ref: "DiaryText" }],
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
