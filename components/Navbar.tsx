import Image from "next/image";
import React from "react";
import SnapchatLogo from "@/public/Snapchat-logo.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TbGridDots } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import LogoutButton from "./LogoutButton";
import { auth } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
  const authUser = await auth();
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4">
      <div className="flex items-center gap-2">
        <Image src={SnapchatLogo} alt="logo" width={50} height={50} />
        <Input type="text" placeholder="Search" className="rounded-full" />
      </div>
      <div>
        <Button variant={"ghost"}>Stories</Button>
        <Button variant={"ghost"}>Spotlight</Button>
        <Button variant={"ghost"}>Chat</Button>
        <Button variant={"ghost"}>Lenses</Button>
      </div>
      <div className="flex items-center gap-5">
        <Button
          variant={"secondary"}
          className="rounded-full bg-white text-black"
          size={"icon"}
        >
          <TbGridDots size={"24px"} />
        </Button>
        <Button className="rounded-full">Snapchat Ads</Button>
        <Button className="rounded-full">Download</Button>
        {authUser ? (
          <LogoutButton />
        ) : (
          <Link href={'/login'}>
            <Button size={"icon"} className="rounded-full">
             Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
