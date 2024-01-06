import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePupolarMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
    const showSearch = useSelector(store => store.gptSearch.showGptSearch);
    useNowPlayingMovies();
    useTopRatedMovies();
    usePopularMovies();
    useUpcomingMovies();

    return (
        <div >
            <Header />
            {showSearch ? (<GptSearchPage />) : (<><MainContainer /><SecondaryContainer /></>)}
        </div>
    );
}
export default Browse;