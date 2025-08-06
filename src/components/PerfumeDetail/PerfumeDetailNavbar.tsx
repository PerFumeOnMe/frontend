import heartFilledImage from "../../assets/MainPage/heart_filled.png";
import heartEmptyImage from "../../assets/MainPage/heart_empty.png";
import { useEffect, useState } from "react";
import {
  useHomepageURL,
  usePerfumeBasicInfo,
} from "../../hooks/usePerfumeDetail";
import { addToFavorites, removeFromFavorites } from "../../apis/Fragrance";

const PerfumeDetailNavbar = () => {
  const { id, liked } = usePerfumeBasicInfo();
  const [isLiked, setIsLiked] = useState(false);
  const { homepageURL } = useHomepageURL();

  useEffect(() => {
    if (liked !== undefined) {
      setIsLiked(liked);
    }
  }, [liked]);

  const handleHeartClick = async () => {
    if (!id) return;

    if (!isLiked) {
      try {
        await addToFavorites(id);
        setIsLiked(true);
      } catch (error) {
        console.error("Failed to add to favorites:", error);
      }
    } else {
      try {
        await removeFromFavorites(id);
        setIsLiked(false);
      } catch (error) {
        console.error("Failed to remove from favorites:", error);
      }
    }
  };

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
      <button onClick={handleHeartClick}>
        <img
          src={isLiked ? heartFilledImage : heartEmptyImage}
          alt={isLiked ? "Heart Filled" : "Heart Empty"}
          className="w-10 h-10 mr-10"
        />
      </button>
      <button
        className="text-title4 bg-main-500 w-full h-12 rounded-2xl text-white"
        onClick={() => {
          if (homepageURL) {
            window.open(homepageURL, "_blank");
          } else {
            alert("공식 홈페이지가 등록되지 않았습니다.");
          }
        }}
      >
        공식 홈페이지
      </button>
    </nav>
  );
};

export default PerfumeDetailNavbar;
