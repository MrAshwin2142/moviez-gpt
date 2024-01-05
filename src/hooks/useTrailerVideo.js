import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS);
        const json = await data.json();
        const trailerFilter = json.results?.filter((movie) => movie.type === "Trailer")
        const trailer = trailerFilter?.[0];
        dispatch(addMovieTrailer(trailer))
    }
    useEffect(() => {
        getTrailer();
    }, [])

}
export default useTrailerVideo;