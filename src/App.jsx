import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import PlayingVideo from "./components/PlayingVideo";
import { VideoProvider } from "./components/context/VideoContext";
import SearchResults from "./components/SearchResults";
import VideoPage from "./components/VideoPage";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to manage sidebar visibility

  return (
    <VideoProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />

        {/* Main Content Area */}
        <div
          className={`flex flex-col flex-1 transition-all duration-300 ${
            isSidebarVisible ? "ml-64" : "ml-0"
          }`}
        >
          {/* Navbar at the top */}
          <Navbar />

          {/* Main routing area */}
          <div className="flex-1 overflow-hidden">
            <Routes>
              <Route
                path="/"
                exact
                element={<Home isSidebarVisible={isSidebarVisible} />} // Pass state to Home
              />
              <Route path="/video/:id" element={<PlayingVideo />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/video/:videoId" element={<VideoPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </VideoProvider>
  );
};

export default App;