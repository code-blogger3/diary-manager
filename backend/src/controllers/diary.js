import { UserModel } from "../models/user.js";
import { DiaryModel } from "../models/diary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { v2 as cloudinary } from "cloudinary";
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
  const { title, text, category } = req.body;
  const { userID } = req.params;
  let img = req.body.img;
  // if (img) {
  //   const uploadedResponse = await cloudinary.uploader.upload(img);
  //   img = uploadedResponse.secure_url; //not sure about this line
  // }
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

const updateDiary = asyncHandler(async (req, res) => {
  const { diaryID } = req.params;
  const { title, text, category } = req.body;
  let img = req.body.img;

  const diary = await DiaryModel.findById(diaryID);

  if (!diary) {
    throw new ApiError(401, "diary not found");
  }

  if (img) {
    if (diary.diaryImgUrl) {
      await cloudinary.uploader.destroy(
        diary.diaryImgUrl.split("/").pop().split(".")[0]
      );
    }

    const uploadedResponse = await cloudinary.uploader.upload(img);
    img = uploadedResponse.secure_url;
  }

  diary.title = title || diary.title;
  diary.text = text || diary.text;
  diary.diaryImgUrl = img || diary.diaryImgUrl;
  diary.category = category || diary.category;
  const updatedDiary = await DiaryModel.findByIdAndUpdate(
    diaryID,
    {
      $set: {
        title: diary.title,
        text: diary.text,
        diaryImgUrl: diary.diaryImgUrl,
        category: diary.category,
      },
    },
    {
      new: true,
    }
  );

  res
    .status(200)
    .json(new ApiResponse(200, "diary updated successfully", updatedDiary));
});

export { sendUserDiary, postDiary, updateDiary };
