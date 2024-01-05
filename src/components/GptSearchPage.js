import { useSelector } from "react-redux";
import { BG_URL } from "../utils/constants";
import GptErrorPage from "./GptErrorPage";
import GptMovies from "./GptMovies";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    const isError = useSelector(store => store.gptSearch.isError)
    return (
        <div className="bg-gradient-to-b from-black">
            <div className="absolute -z-10">
                <img src={BG_URL} alt="background" />
            </div>
            <GptSearchBar />
            {isError ? <GptErrorPage /> : <GptMovies />}
        </div>
    );
}
export default GptSearchPage;