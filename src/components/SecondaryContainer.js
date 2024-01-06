import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';
import usePopularMovies from '../hooks/usePupolarMovies';

const SecondaryContainer = () => {
  const nowPlayingmovies = useSelector(store => store.movies.nowPlayingMovies);
  const popularMovies = useSelector(store =>store.movies.popularMovies);
  const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);
  const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
  return (
    <div className='bg-black text-white'>
      <div className='relative z-20 md:-mt-60'>
        <MoviesList title={"Now Playing"} movies={nowPlayingmovies} />
        <MoviesList title={"Top Rated"} movies={topRatedMovies} />
        <MoviesList title={"Upcoming"} movies={upcomingMovies} />
        <MoviesList title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
