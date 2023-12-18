

import { User } from "../models/user.model.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import crypto from "crypto";

// Register User
export const registerUser = asyncErrorHandler(async (req, res, next) => {
  console.log("body",req.body)
    const { fullName, email, userName, gender, password, location } = req.body;
  if (
    [fullName, email, userName, gender, password, location].some(
      (field) => field?.trim() === ""
    )
  ) {
    return next(new ErrorHandler("All fields are required", 400));
  }
  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existedUser) {
    return next(
      new ErrorHandler("User with email or username already exists", 409)
    );
  }

  const user = await User.create({
    userName,
    fullName,
    email,
    gender,
    password,
    location,
  });
  if (!user) {
    return next(
      new ErrorHandler("Something went wrong while registering the user", 500)
    )};

  sendToken(user, 201, res);
});

// Login User
export const loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email And Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 201, res);
});

// Logout User
export const logoutUser = asyncErrorHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// // Get User Details
export const getUserDetails = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const updateProfile = asyncErrorHandler(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    useFindAndModify: true,
  });

  res.status(200).json({
    success: true,
  });
});

// get all user 

export const getAllUsers = asyncErrorHandler(async (req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
});
