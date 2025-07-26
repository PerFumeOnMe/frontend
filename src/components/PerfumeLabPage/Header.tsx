import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-5 relative flex items-center">
      <button
        onClick={() => navigate("/")}
        className="absolute left-4 top-1/2 -translate-y-1/2"
      >
        <SlArrowLeft className="w-5 h-5" />
      </button>
      <h1 className="text-title3 text-grayscale-1000 text-center w-full">
        향수공방
      </h1>
    </div>
  );
};

export default Header;
