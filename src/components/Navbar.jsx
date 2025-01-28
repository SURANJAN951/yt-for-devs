import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 w-full bg-white px-6 py-2">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-center cursor-pointer" />
        <img src="/Logo.png" alt="Logo" className="w-28" />
      </div>

      {/* Middle Section */}
      <div className="flex w-[35%] items-center">
        <div className="w-full px-3 py-2 border rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none w-full" />
        </div>
        <button className="px-4 py-2 border bg-gray-100 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      {/* Right Section */}
      <div className="flex space-x-5 items-center">
        <RiVideoAddFill className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <Avatar src="/profile.png" size="32" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
