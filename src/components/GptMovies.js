import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const GptMovies = () => {
  const movies = useSelector(store=>store.gptSearch.GptMovies);
  if(!movies) return;
  return (
    <div>
      <MoviesList title={"Top Results"} movies={movies}/>
    </div>
  )
}

export default GptMovies
