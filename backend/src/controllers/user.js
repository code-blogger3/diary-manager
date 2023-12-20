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

const signIn = asyncHandler(async (req, res) => {
  const { usernameOremail, password } = req.body;
  const user = await UserModel.findOne({
    $or: [{ username: usernameOremail }, { email: usernameOremail }],
  });

  if (!user) {
    throw new ApiError(400, "User does not exist");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(400, "Username or password is incorrect");
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json(
    new ApiResponse(200, "login successful", {
      token,
      userID: user._id,
    })
  );
});

export { signUp, signIn };
