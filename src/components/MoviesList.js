import React from 'react'
import MoviesPoster from './MoviesPoster'

const MoviesList = ({ title, movies }) => {
    // console.log(movies)
    return (
        <div className='px-8 '>
            <h1 className=' font-bold text-2xl m-2'> {title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                    {movies?.map((movie) => (<MoviesPoster key={movie.id} poster_path={movie.poster_path} />))};
                </div>
            </div>
        </div>
    )
}

export default MoviesList
