import React from 'react'
import { useSelector } from 'react-redux'
import MainTitle from './MainTitle';
import MainBackground from './MainBackground';
import SecondaryContainer from './SecondaryContainer';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return;
    const mainMovie = movies[0]
    // console.log(movies);
    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <MainTitle title={original_title} overview={overview} />
            <MainBackground movieId={id} />
            <SecondaryContainer />
        </div>
    )
}

export default MainContainer
