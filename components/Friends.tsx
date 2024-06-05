import React from "react";
import Friend from "./Friend";
import { auth } from "@/auth";
import { getSideBarUsers } from "@/lib/userData";

const Friends = async () => {
  const authUser = await auth();
  const otherUsers:any =  authUser?.user ? await getSideBarUsers(authUser?.user?._id) : [];
  return (
    <div className="flex-1 overflow-y-auto">
      {
      otherUsers.map((user: any) => {
        return(
         <Friend key={user._id} user={user} />
        )
      
      })}
    </div>
  );
};

export default Friends;
