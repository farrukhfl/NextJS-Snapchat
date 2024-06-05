import Image from "next/image";
import React from "react";
import logo from "@/public/Snapchat-logo.png";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-300 h-screen">
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-white p-10 flex flex-col items-center text-center shadow-lg rounded-md">
          <Image src={logo} alt="logo" height={40} width={40} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
