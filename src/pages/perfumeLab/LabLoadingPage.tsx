import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mainBg from "../../assets/MainPage/main.png";

const LabLoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/lab/result");
    }, 3000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full min-w-[375px] max-w-[480px] min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 w-[200%] animate-slide-bg">
        <img
          src={mainBg}
          alt="배경 이미지"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative w-full h-full flex flex-col items-center justify-center -mt-[100px]">
        <p className="text-title1 text-white mb-[24px]">김진성님만의</p>
        <p className="text-title1 text-white">향수를 찾고 있어요</p>
      </div>
    </div>
  );
};

export default LabLoadingPage;
