import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing hamburger menu icon
import { FaCode, FaLaptopCode, FaAppStore, FaBrain, FaLock, FaGamepad, FaCloud, FaGraduationCap, FaMusic, FaChalkboardTeacher } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to toggle sidebar visibility

  const sidebarItems = [
    { id: "dev-1", name: "Developer", icon: <FaCode /> },
    { id: "coding-1", name: "Coding", icon: <FaLaptopCode /> },
    { id: "dsa-1", name: "DSA / CP", icon: <SiLeetcode /> },
    { id: "app-dev", name: "App Dev", icon: <FaAppStore /> },
    { id: "ml-ai", name: "Machine Learning/AI", icon: <FaBrain /> },
    { id: "web-dev", name: "Web Dev", icon: <FaLaptopCode /> },
    { id: "cybersec", name: "Cybersecurity", icon: <FaLock /> },
    { id: "tech-tut", name: "Tech Tutorials", icon: <FaChalkboardTeacher /> },
    { id: "game-dev", name: "Game Development", icon: <FaGamepad /> },
    { id: "cloud-computing", name: "Cloud Computing", icon: <FaCloud /> },
    { id: "career-guidance", name: "Career Guidance", icon: <FaGraduationCap /> },
    { id: "lofi", name: "Lofi & Relaxing Tunes", icon: <FaMusic /> },
  ];

  return (
    <div className="relative">
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="p-2 bg-gray-800 text-white fixed top-4 left-4 z-50 rounded-md"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-64`}
      >
        <div className="px-4 py-4 h-full overflow-y-scroll font-bold">
          {/* Sidebar Items */}
          <div className="space-y-3">
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 hover:bg-red-500 hover:text-white duration-300 rounded-xl p-2 mt-3 cursor-pointer"
              >
                <div className="text-xl">{item.icon}</div>
                <span className="font-bold">{item.name}</span>
              </div>
            ))}
          </div>

          <br />
          <hr />

          {/* Footer */}
          <div className="mt-5 text-center">
            <span className="text-black text-1xl font-bold">© 2025 | </span>
            <span className="text-black text-1xl font-bold">Vid</span>
            <span className="text-red-500 text-1xl font-bold">Code</span>
            <span className="text-black text-1xl font-bold"> | Suranjan Kumar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;