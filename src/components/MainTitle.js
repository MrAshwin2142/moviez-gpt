import React from 'react'

const MainTitle = ({ title, overview }) => {
    // console.log(title, overview)
    return (
        <div className='absolute pt-32 pl-16 aspect-video bg-gradient-to-r from-black'>
            <div className='w-5/12 m-4'>
                <h1 className='font-bold text-white text-4xl my-4'>{title}</h1>
                <p className='text-white'>{overview}</p>
            </div>
            <div className='m-4'>
                <button className='py-3 m-2 rounded-lg px-8 text-black font-bold bg-white hover:opacity-75'>▶ Play</button>
                <button className='py-3 m-2 rounded-lg px-8 text-white font-bold bg-slate-600'>ℹ More Info</button>
            </div>
        </div>
    )
}

export default MainTitle
