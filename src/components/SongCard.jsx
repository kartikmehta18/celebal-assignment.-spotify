import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';


const SongCard = ({ song, data, i, isPlaying, activeSong }) => {
  // const activeSong = 'Test'; 
  // dispatch - to enable play/pause functionality
  const dispatch = useDispatch()
  //  console.log(song)

  const handlePauseClick = () => {
    dispatch(playPause(false))

  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

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
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />

          </div>
          <img src={song.attributes.artwork?.url} alt="song_img" />
        </div>

        <div className='mt-4 flex flex-col'>
          <p className='font-semibold text-lg text-white truncate'>
            {/* <Link to={`/songs/${song?.key}`}>{song.attributes?.albumName}</Link> */}
            <Link to={`/songs/${song?.id}`}>{song.attributes?.name}</Link>
          </p>
          <p className='text-sm truncate text-gray-300 mt-1'>
            <Link to={song.attributes?.artistName ? `/artists/${song?.relationships?.artists?.data[0]?.id}` : '/top-artists'}>{song.attributes?.artistName}</Link>
          </p>

        </div>

      </div>
    </>
  );
};

export default SongCard;
