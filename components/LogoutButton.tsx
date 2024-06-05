import React from "react";
import { Button } from "./ui/button";
import { IoMdLogOut } from "react-icons/io";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import { logoutHandler } from "@/lib/actions";

const LogoutButton = () => {
//   const logoutHandler = async () => {
//     "use server";
//     try {
//       await signOut();
//     } catch (error) {
//       throw error;
//     }
//     redirect("/login");
//   };
  return (
    <form action={logoutHandler}>
      <Button size={"icon"} className="rounded-full">
        <IoMdLogOut size={"18px"} />
      </Button>
    </form>
  );
};

export default LogoutButton;
