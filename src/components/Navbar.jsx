import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className="flex justify-between fixed top-0 w-full bg-white px-6 py-2">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-center cursor-pointer" />
        <img src="/Logo.jpg" alt="Logo" className="w-28" />
      </div>

      {/* Middle Section */}
      <div className="flex w-[35%] items-center">
        <form onSubmit={handleSearch} className="flex w-full">
          <div className="w-[75%] px-3 py-2 border rounded-l-full">
            <input
              type="text"
              placeholder="Search in VidCode..."
              className="outline-none w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="px-4 py-2 border bg-gray-100 rounded-r-full">
            <CiSearch size={"24px"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
