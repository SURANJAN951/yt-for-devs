import React, { useState } from 'react';
import Video from './Video'; // Import the Video component

const YouTubeClone = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '10px', background: '#f8f8f8', textAlign: 'center' }}>
        <h1>YouTube Clone</h1>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', overflowX: 'scroll', gap: '10px', padding: '10px' }}>
          {videos.map((video) => (
            <Video key={video.id} video={video} onVideoClick={setCurrentVideo} />
          ))}
        </div>

        <div style={{ padding: '10px' }}>
          {currentVideo ? (
            <div className="video-player">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
                title={currentVideo.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ width: '100%', height: '300px', borderRadius: '5px' }}
              ></iframe>
            </div>
          ) : (
            <p style={{ textAlign: 'center' }}>Select a video to play</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouTubeClone;
