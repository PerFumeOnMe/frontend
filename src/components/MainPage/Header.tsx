import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/MainPage/search.png";
import heartIcon from "../../assets/MainPage/heart.png";

const Header = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/all-perfume");
    };

    const handleHeartClick = () => {
        navigate("/myPage");
    };
    
    return (
        <header className="flex items-center justify-between px-[16px] pt-[24px] w-full h-[56px]">
            {/* Left: Logo */}
            <h1 className="font-serif text-extrabold text-[22px] text-white">
                PerfuOnMe
            </h1>

            {/* Right: Icons */}
            <div className="flex items-center gap-[8px]">
                <button aria-label="Search" onClick={handleSearchClick}>
                    <img src={searchIcon} alt="검색" className="w-[32px] h-[32px]" />
                </button>
                <button aria-label="Favorites" onClick={handleHeartClick}>
                    <img src={heartIcon} alt="찜한 향수" className="w-[32px] h-[32px]" />
                </button>
            </div>
        </header>
    );
};

export default Header;
