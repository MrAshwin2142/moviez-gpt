import { useSelector } from "react-redux";
import { BG_URL } from "../utils/constants";
import GptErrorPage from "./GptErrorPage";
import GptMovies from "./GptMovies";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    const isError = useSelector(store => store.gptSearch.isError)
    return (
        <>
            <div className="fixed -z-10">
                <img className="h-screen object-cover w-screen" src={BG_URL} alt="background" />
            </div>
            <div className="bg-gradient-to-b from-black pt-[15%] md:pt-0">

                <GptSearchBar />
                {isError ? <GptErrorPage /> : <GptMovies />}
            </div>
        </>
    );
}
export default GptSearchPage;