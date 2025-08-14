import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-5 relative flex items-center">
      <button
        onClick={() => navigate("/")}
        className="absolute left-4 top-1/2 -translate-y-1/2"
      >
        <RxCross2 className="w-6 h-6 text-grayscale-500" />
      </button>
      <h1 className="text-title3 text-grayscale-200 text-center w-full">
        향수공방
      </h1>
    </div>
  );
};

export default Header;
