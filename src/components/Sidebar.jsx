import React from "react";
import { FaCode, FaLaptopCode, FaAppStore, FaBrain, FaLock, FaGamepad, FaCloud, FaGraduationCap, FaMusic, FaChalkboardTeacher } from "react-icons/fa"; // Importing necessary icons
import { SiLeetcode } from "react-icons/si";  // Importing other icons

const Sidebar = () => {
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
    <div className="w-full px-4 py-4 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16 font-bold">
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
  );
};

export default Sidebar;
