import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';


const SongCard = ({ song, data, i }) => {
  const activeSong = 'Test';
  // dispatch - to enable play/pause functionality
  const dispatch = useDispatch()
  //  console.log(song)
  return (
    <>
      <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
        <div className='relative w-full h-56 group'>
          <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
      ${activeSong?.id === song?.id ?
              // ${activeSong?.attributes?.albumName === song?.attributes?.albumName ? 
              'flex bg-black bg-opacity-70' : 'hidden'}
        `}>

            <PlayPause
            />

          </div>
          <img src={song.attributes.artwork?.url} alt="song_img" />
        </div>

      </div>
    </>
  );
};

export default SongCard;
