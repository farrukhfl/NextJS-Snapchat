import { auth } from "@/auth";
import connectToDatabse from "@/lib/db";
import { User, UserDocument } from "@/models/user.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const authUser = await auth();
    if (!authUser) return;
    await connectToDatabse();
    const users: UserDocument[] = await User.find({
      _id: { $ne: authUser?.user?.id },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
