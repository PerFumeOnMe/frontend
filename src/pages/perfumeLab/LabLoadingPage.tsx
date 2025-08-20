import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePerfumeLab } from "../../hooks/PerfumeLab/usePerfumeLab";
import mainBg from "../../assets/MainPage/main.png";
import { useAuth } from "../../context/AuthContext";

const LabLoadingPage = () => {
  const navigate = useNavigate();
  const { isLoading, completedPerfume, error } = usePerfumeLab();
  const { name } = useAuth();

  useEffect(() => {
    if (error) {
      navigate("/lab");
      return;
    }

    if (!isLoading && completedPerfume) {
      const timer = setTimeout(() => {
        navigate("/lab/result");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoading, completedPerfume, error, navigate]);

  return (
    <div className="w-full min-w-[375px] max-w-[480px] min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 w-[200%] animate-infinite-slide">
        <img
          src={mainBg}
          alt="배경 이미지"
          className="w-full h-full object-cover"
        />
      </div>

      <style>{`
        @keyframes infinite-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-slide {
          animation: infinite-slide 20s linear infinite;
        }
      `}</style>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative w-full h-full flex flex-col items-center justify-center -mt-[100px]">
        <p className="text-title1 text-white mb-[24px]">{name}님만의</p>
        <p className="text-title1 text-white mb-8">향수를 찾고 있어요</p>
      </div>
    </div>
  );
};

export default LabLoadingPage;
