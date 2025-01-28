import React from 'react';

const Video = ({ video }) => {
  console.log(video);
  if (!video) return null; 
  
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={video.thumbnails[0].url}
        alt={video.title}
        className="w-full h-auto rounded"
      />
      <h3 className="text-lg font-bold mt-2">{video.title}</h3>
      <p className="text-gray-500">{video.descriptionSnippet}</p>
      <p className="text-sm mt-1">Views: {video.stats.views.toLocaleString()}</p>
      <a
        href={`https://www.youtube.com/watch?v=${video.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 inline-block"
      >
        Watch on YouTube
      </a>
    </div>
  );
};

export default Video;
