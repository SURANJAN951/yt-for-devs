import React from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { videoId } = useParams();

  return (
    <div className="p-4 flex flex-col items-center">
      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPage;
