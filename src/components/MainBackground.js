import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';


const MainBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.movieTrailer);

  useTrailerVideo(movieId);
  return (
    <div className='bg-gradient-to-t from-black md:pt-0 pt-24'> 
      <iframe
      className='w-full aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=pWpn7fVdltPz90D2&autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default MainBackground
