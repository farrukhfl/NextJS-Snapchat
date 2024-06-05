import mongoose from "mongoose";
import { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectToDatabse = async () => {
  if (isConnected) {
    console.log("Mongodb already connected");
    return isConnected;
  }
  try {
    const res = await mongoose.connect(process.env.MONGO_URI!);
    isConnected = res.connection;
    return isConnected
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default connectToDatabse