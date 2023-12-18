import { UserModel } from "../models/user.js";
import { DiaryModel } from "../models/diary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const sendUserDiary = asyncHandler(async (req, res) => {
  const { userID } = req.params;
  const user = await UserModel.findById(userID)
    .populate("diaryID")
    .select("-password -__v -username -_id -email");

  res
    .status(200)
    .json(new ApiResponse(200, "Diary are send successfully", user));
});

const postDiary = asyncHandler(async (req, res) => {
  const { userID, title, text, category } = req.body;
  let img = req.body.img;

  const diary = new DiaryModel({
    title,
    diaryImgUrl: img,
    text,
    category,
  });

  const newDiary = await diary.save();

  await UserModel.findByIdAndUpdate(
    userID,
    { $push: { diaryID: newDiary._id } },
    { new: true }
  );

  res
    .status(200)
    .json(new ApiResponse(200, "diary created successfully", newDiary));
});

export { sendUserDiary, postDiary };
