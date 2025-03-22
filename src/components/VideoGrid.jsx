import React from "react";
import Video from "./Video";

const VideoGrid = ({ videos, isSidebarVisible }) => {
  return (
    <div
      className={`grid gap-4 ${
        isSidebarVisible
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" // Adjust when sidebar is visible
          : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4" // Adjust when sidebar is hidden
      }`}
    >
      {videos.map((video) => (
        <Video key={video.videoId} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;