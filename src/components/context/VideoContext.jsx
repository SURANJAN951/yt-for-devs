import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <VideoContext.Provider value={{ videos, setVideos, loading, setLoading }}>
      {children}
    </VideoContext.Provider>
  );
};