import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from 'crypto'

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Please enter username"],
    trim: true,
    lowercase: true,
  },
  fullName: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: [true, "email already exists"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please enter your Password"],
    trim: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Gender is required"],
  },
  location: {
    type: String,
    required: true,
    uppercase: true,
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  blockStatus: {
    type: Boolean,
    required: false,
    default: false,
  },
  viewedProfile: {
    type: Number,
    required: false,
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) {
      next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
  });
}

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.getResetPasswordToken = async function () {

  // generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // generate hash token and add to db
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
}

export const User = mongoose.model("User", userSchema);
