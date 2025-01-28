import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio, SiYoutubekids, SiYoutubemusic, SiTrendmicro, SiStylelint } from "react-icons/si";
import { MdOutlineWatchLater, MdPodcasts } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { BiVideo } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    { id: "home-1", name: "Home", icon: <GoHome /> },
    { id: "home-2", name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: "home-3", name: "Subscription", icon: <MdOutlineSubscriptions /> },
  ];

  const sidebarItems2 = [
    { id: "you-1", name: "Your Channel", icon: <PiUserSquareThin /> },
    { id: "you-2", name: "History", icon: <MdHistory /> },
    { id: "you-3", name: "Playlists", icon: <MdOutlineSubscriptions /> },
    { id: "you-4", name: "Your Videos", icon: <BiVideo /> },
    { id: "you-5", name: "Watch later", icon: <MdOutlineWatchLater /> },
    { id: "you-6", name: "Liked videos", icon: <AiOutlineLike /> },
  ];

  const sidebarItems3 = [
    { id: "explore-1", name: "Trending", icon: <SiTrendmicro /> },
    { id: "explore-2", name: "Shopping", icon: <HiOutlineShoppingBag /> },
    { id: "explore-3", name: "Music", icon: <SiYoutubemusic /> },
    { id: "explore-4", name: "Films", icon: <PiFilmSlateLight /> },
    { id: "explore-5", name: "Live", icon: <CgMediaLive /> },
    { id: "explore-6", name: "Gaming", icon: <IoGameControllerOutline /> },
    { id: "explore-7", name: "News", icon: <FaRegNewspaper /> },
    { id: "explore-8", name: "Sport", icon: <TfiCup /> },
    { id: "explore-9", name: "Courses", icon: <SiStylelint /> },
    { id: "explore-10", name: "Fashion & beauty", icon: <PiLightbulbLight /> },
    { id: "explore-11", name: "Podcasts", icon: <MdPodcasts /> },
  ];

  const sidebarItems4 = [
    { id: "more-1", name: "YouTube Premium", icon: <FaYoutube /> },
    { id: "more-2", name: "YouTube Studio", icon: <SiYoutubestudio /> },
    { id: "more-3", name: "YouTube Music", icon: <SiYoutubemusic /> },
    { id: "more-4", name: "YouTube Kids", icon: <SiYoutubekids /> },
  ];

  return (
    <div className="px-6 w-full h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16">
      {/* Home */}
      <div className="space-y-3 items-center">
        {sidebarItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1">
            <div className="text-xl cursor-pointer">{item.icon}</div>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* You */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => (
          <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1">
            <div className="text-xl cursor-pointer">{item.icon}</div>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* Explore */}
      <div className="mt-4 space-y-3 items-center">
        <h1 className="font-semibold">Explore</h1>
        {sidebarItems3.map((item) => (
          <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1">
            <div className="text-xl cursor-pointer">{item.icon}</div>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* More */}
      <div className="mt-4 space-y-3 items-center">
        <h1 className="font-semibold">More From YouTube</h1>
        {sidebarItems4.map((item) => (
          <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1">
            <div className="text-xl cursor-pointer text-red-500">{item.icon}</div>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* Footer */}
      <span className="text-xs text-gray-600 font-semibold">
        About Press Copyright <br /> Contact us Creators <br /> Advertise Developers <br />
        <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works <br /> Test new features
      </span>
      <p className="text-xs text-gray-500 mt-3">© 2024 Google LLC</p>
    </div>
  );
};

export default Sidebar;
