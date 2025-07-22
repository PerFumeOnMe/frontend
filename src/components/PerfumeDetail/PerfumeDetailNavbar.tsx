import heartFilledImage from "../../assets/MainPage/heart_filled.png";
import heartEmptyImage from "../../assets/MainPage/heart_empty.png";

const PerfumeDetailNavbar = () => {
  return (
    <nav
      className="
      fixed bottom-0 inset-x-0 mx-auto
      w-full max-w-120
      h-20 bg-white
      shadow-[0_-1px_8px_0_rgba(0,0,0,0.10)]
      border-t border-gray-100
      flex justify-between items-center px-7
      z-50
    "
    >
      <button>
        <img src={heartFilledImage} alt="Heart Filled" className="w-10 h-10" />
      </button>
      <button className="text-title4 bg-main-500 w-70 h-12 rounded-2xl text-white">
        공식 홈페이지
      </button>
    </nav>
  );
};

export default PerfumeDetailNavbar;
