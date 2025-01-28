import React, { useState } from 'react';

const YouTubeClone = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '10px', background: '#f8f8f8', textAlign: 'center' }}>
        <h1>YouTube Clone</h1>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', overflowX: 'scroll', gap: '10px', padding: '10px' }}>
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-thumbnail"
              onClick={() => handleVideoClick(video)}
              style={{ cursor: 'pointer', minWidth: '200px', textAlign: 'center' }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                style={{ width: '100%', borderRadius: '5px' }}
              />
              <h4>{video.title}</h4>
            </div>
          ))}
        </div>

        <div style={{ padding: '10px' }}>
          {currentVideo ? (
            <div className="video-player">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.id}`}
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

      <footer style={{ height: '40%', background: '#f0f0f0', borderTop: '1px solid #ddd' }}>
        <textarea
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            resize: 'none',
            fontFamily: 'monospace',
            padding: '10px',
          }}
          placeholder="Write your code here..."
        />
      </footer>
    </div>
  );
};

export default YouTubeClone;
