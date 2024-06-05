import React from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="pb-2 border-b-2 border-[#E3E6E8]">
      <div className="flex items-center gap-2 bg-[#E3E6E8] rounded-xl px-2 py-3">
        <SearchIcon />
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search or start new chat"
        />
      </div>
    </div>
  );
};

export default Searchbar;
