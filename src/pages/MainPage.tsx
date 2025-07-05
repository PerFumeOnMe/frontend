import Banner from "../components/MainPage/Banner";
import SearchBar from "../components/MainPage/SearchBar";

const MainPage = () => {
    return (
        <div className="pb-20 bg-white min-h-screen w-full">
            <Banner />
            <SearchBar />
        </div>
    );
};

export default MainPage;