import { FiSearch, FiHeart } from "react-icons/fi";
import logoImage from "../../assets/MainPage/logo.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/all-perfume");
    };
    
    return (
        <header className="flex items-center justify-between px-[16px] pt-[24px] w-full h-[56px]">
            {/* Left: Logo */}
            <img
                src={logoImage}
                alt="SKINT 로고"
                className="h-[28px] object-contain"
            />

            {/* Right: Icons */}
            <div className="flex items-center gap-[16px]">
                <button aria-label="Search" onClick={handleSearchClick}>
                    <FiSearch className="w-[28px] h-[28px] text-white" />
                </button>
                <button aria-label="Favorites">
                    <FiHeart className="w-[28px] h-[28px] text-white" />
                </button>
            </div>
        </header>
    );
};

export default Header;
