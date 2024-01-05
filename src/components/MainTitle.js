import React from 'react'
import { useSelector } from 'react-redux'

const MainTitle = ({ title, overview }) => {
    const trailerVideo=useSelector(store=>store.movies?.movieTrailer)
    return (
        <div className='absolute pt-48 pl-16 aspect-video bg-gradient-to-r from-black'>
            <div className='w-5/12 m-4'>
                <h1 className='font-bold text-white text-4xl my-4'>{title}</h1>
                <p className='text-white my-2'>{overview}</p>
            </div>
            <div className='my-8'>
                <a className='py-3 m-2 rounded-lg px-8 text-black font-bold bg-white hover:opacity-75' href={"https://www.youtube.com/watch?v="+trailerVideo?.key}>▶ Play</a>
                <a className='py-3 m-2 rounded-lg px-8 text-white font-bold bg-slate-600' href={"https://www.youtube.com/watch?v="+trailerVideo?.key}>ℹ More Info</a>
            </div>
        </div>
    )
}

export default MainTitle
