import React from 'react'
import MoviesPoster from './MoviesPoster'

const MoviesList = ({ title, movies }) => {
    return (
        <div className='pl-8 bg-gradient-to-t from-black '>
            <h1 className='text-white font-bold text-2xl m-2'> {title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                    {movies?.map((movie) => (<MoviesPoster key={movie.id} poster_path={movie.poster_path} />))};
                </div>
            </div>
        </div>
    )
}

export default MoviesList
