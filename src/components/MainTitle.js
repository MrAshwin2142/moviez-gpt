import React from 'react'
import { useSelector } from 'react-redux'

const MainTitle = ({ title, overview }) => {
    const trailerVideo=useSelector(store=>store.movies?.movieTrailer)
    return (
        <div className='absolute md:pt-44 pt-28 pl-16 md:h-full h-6 w-8/12 aspect-video bg-gradient-to-r from-black'>
            <div className='md:w-5/12 md:m-4'>
                <h1 className='font-bold text-white text-xl md:text-4xl my-4'>{title}</h1>
                <p className='text-white hidden md:block my-2'>{overview}</p>
            </div>
            <div className='my-8'>
                <a className='md:py-3 py-1 m-2 rounded-lg md:px-8 px-2 text-black font-bold bg-white hover:opacity-75' href={"https://www.youtube.com/watch?v="+trailerVideo?.key}>▶ Play</a>
                <a className='py-3 m-2 hidden md:inline rounded-lg px-8 text-white font-bold bg-slate-600' href={"https://www.youtube.com/watch?v="+trailerVideo?.key}>ℹ More Info</a>
            </div>
        </div>
    )
}

export default MainTitle
