import React from 'react';
import { useNavigate } from 'react-router-dom';

const Video = ({ video }) => {
  const navigate = useNavigate();

  if (!video) return null;

  // Format duration from seconds to "MM:SS"
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleVideoClick = () => {
    // This will navigate to the video page and start playing it
    navigate(`/video/${video.videoId}`);
  };

  return (
    <div 
      className="border p-4 rounded shadow cursor-pointer"
      onClick={handleVideoClick} // Clicking on any part of the thumbnail will trigger video play
    >
      <div className="relative">
        <img
          src={video.videoThumbnails[0]?.url}
          alt={video.title}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 py-0.5 rounded">
          {formatDuration(video.lengthSeconds)}
        </span>
      </div>
      <h3 className="text-lg font-medium">{video.title}</h3>
      <p className="text-gray-600 text-sm">Author: {video.author}</p>
    </div>
  );
};

export default Video;