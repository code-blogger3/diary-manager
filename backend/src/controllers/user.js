import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asyncHandler.js";
import { UserModel } from "../models/user.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const signUp = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  const user = await UserModel.findOne({
    $or: [{ username }, { email }],
  });

  if (user) {
    throw new ApiError(409, "User with this username/email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, email, password: hashedPassword });
  await newUser.save();
  res.json(new ApiResponse(200, "User registered successfully"));
});

export { signUp };
