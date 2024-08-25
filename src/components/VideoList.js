import React from 'react';
import VideoPlayer from './VideoPlayer';

const VideoList = () => {
  const videos = [
    'M7lc1UVf-VE', // Replace with actual YouTube video IDs
    'dQw4w9WgXcQ',
    '3JZ_D3ELwOQ',
    'ScMzIvxBSi4', // New video ID
    'E7wJTI-1dvQ', // New video ID
    'kxopViU98Xo', // New video ID
  ];

  return (
    <div className="video-list">
      {videos.map((videoId, index) => (
        <VideoPlayer key={index} videoId={videoId} />
      ))}
    </div>
  );
};

export default VideoList;
