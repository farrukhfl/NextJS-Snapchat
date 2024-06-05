import mongoose, { Document, Model } from "mongoose";

export interface UserInterface{
    username: string,
    fullname: string,
    email: string,
    profilePhoto: string
}
export interface UserDocument extends UserInterface, Document{
    createdAt: Date,
    updatedAt: Date
}

const userModel = new mongoose.Schema<UserDocument>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    profilePhoto: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const User: Model<UserDocument> = mongoose?.models?.User || mongoose.model("User", userModel);
