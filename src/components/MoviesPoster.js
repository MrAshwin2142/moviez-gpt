import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MoviesPoster = ({ poster_path }) => {
    return (
        <div className='w-44 m-2'>
            <img className='' src={POSTER_URL + poster_path} />
        </div>
    )
}

export default MoviesPoster
