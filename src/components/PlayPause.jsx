import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import React from 'react';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  <div>
    {isPlaying && activeSong?.id === song.id ? (
      <FaPauseCircle
        size={35}
        className='text-gray-300'
        onClick={handlePause} />
    ) : (
      <FaPlayCircle
        size={35}
        className='text-gray-300'
        onClick={handlePlay} />
    )}
  </div>
);

export default PlayPause;
