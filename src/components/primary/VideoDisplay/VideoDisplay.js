import React from 'react';
import './VideoDisplay.scss';

const VideoDisplay = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className='videoDisplay'>
      <div className='videoDisplay__iframe'>
        <iframe
          src={videoSrc}
          allowFullScreen
          title='Video player'
          aria-label={`Player for: ${video.snippet.title}`}
        />
      </div>
      <div className='videoDisplay__info'>
        <div
          className='videoDisplay__title'
          aria-label={`Title of: ${video.snippet.title}`}
        >
          {video.snippet.title}
        </div>
        <div
          className='videoDisplay__desc'
          aria-label={`Description of ${video.snippet.title}`}
        >
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
