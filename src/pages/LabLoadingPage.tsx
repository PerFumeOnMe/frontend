import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loadingImage from "../assets/PerfumeLab/loading.png";

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
    <div className="min-w-[480px] bg-white flex flex-col items-center justify-center min-h-screen">
      <img src={loadingImage} alt="로딩 중" className="w-60 mb-4" />
      <h1>사용자님만의 향수를 찾고 있어요.</h1>
    </div>
  );
};

export default LabLoadingPage;
