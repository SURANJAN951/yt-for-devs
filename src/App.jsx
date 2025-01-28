import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main routing area */}
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/video/:id" element={<PlayingVideo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
