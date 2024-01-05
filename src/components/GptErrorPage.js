import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const GptErrorPage = () => {
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
    useTopRatedMovies();
    return ( 
        <div className=''>
            <div className='p-4 flex justify-center'>
                <p className='text-white text-3xl w-6/12 text-center my-4'>
                    Whoops! Seems like we've hit the movie-search limit! No worries, though. Take a peek at our <span className='text-red-900 font-bold'>"Top Rated Movies"</span> list for some awesome picks! Thanks for giving our app a try - you're awesome for loving movies as much as we do! 🎬✨
                </p>
            </div>
            <div>
            <MoviesList title={"Top Rated"} movies={topRatedMovies} />
            </div>
        </div>
    )
}

export default GptErrorPage
