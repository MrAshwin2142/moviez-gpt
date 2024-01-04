import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePupolarMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    useNowPlayingMovies();
    useTopRatedMovies();
    usePopularMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
}
export default Browse;