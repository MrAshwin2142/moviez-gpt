import React, { useRef } from 'react'
import openai from '../utils/openai';
import { useDispatch } from 'react-redux';
import { addGptMovies, setIsError } from '../utils/gptSlice';
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const fetchMovie = async (movieName) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=false&page=1', API_OPTIONS);
        const json = data.json();
        return json.results;

    }
    const handleSearch = async () => {

        const moviesQuery = "Act as a Movies Recommendation system and suggest 5 movies for query :" + searchText.current.value + " only give name of 5 mives , coma separated like the give example given ahead. example - 12th fail, KGF, Sanju, Animal, Dangal";
        try {
            const gptResponse = await openai.chat.completions.create({
                messages: [{ role: 'user', content: moviesQuery }],
                model: 'gpt-3.5-turbo',
            });
            const gptMovies = gptResponse.choices?.[0]?.message?.content.split(",");
            const tmdbMovieSearch = gptMovies.map((movie) => fetchMovie(movie));
            dispatch(addGptMovies(tmdbMovieSearch));
        } catch (error) {
            // Handle the error here, such as setting an error state or displaying an error message to the user
            dispatch(setIsError());
        }
    }
    return (
        <div className='flex justify-center'>
            <form className='w-full flex justify-center mt-24' onSubmit={(e) => e.preventDefault()}>
                <input className='w-4/12 bg-slate-700 px-5 py-2 rounded-l-lg text-white' ref={searchText} type='text' placeholder='What Would You Like To Watch Today..?' />
                <button className='bg-green-500 rounded-r-lg px-2 text-white' onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar
