import { auth } from "@/auth";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import LogoutButton from "./LogoutButton";
import Searchbar from "./Searchbar";
import Friends from "./Friends";

const LeftSidebar = async () => {
  const authUser = await auth();
  return (
    <div className="w-[50%] md:w-[25%] m-2 border-2 border-gray-300 rounded-lg">
      <div className="flex p-4 items-center justify-between border-b border-gray-300 pb-3">
        <div className="flex items-center gap-2">
          {authUser && (
            <>
              <Avatar>
                <AvatarImage src={authUser.user?.image!} alt="shadcn" />
              </Avatar>
              <h1>{authUser?.user?.name}</h1>
            </>
          )}
        </div>
        <div>
            <LogoutButton />
        </div>
      </div>
      <div className="p-2">
        <Searchbar />
        <Friends />
      </div>
    </div>
  );
};

export default LeftSidebar;
