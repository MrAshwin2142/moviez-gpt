import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MoviesPoster = ({ poster_path }) => {
    return (
        <div className='md:w-44 w-36 m-2 hover:scale-110'>
            <a href="">
                <img className='' src={POSTER_URL + poster_path} />
            </a>
        </div>
    )
}

export default MoviesPoster
