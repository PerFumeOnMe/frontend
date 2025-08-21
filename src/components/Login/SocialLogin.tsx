import kakao from '../../assets/Login/kakao.png';
import { useState } from "react";

export default function SocialLogin() {
  const [showModal, setShowModal] = useState(false);
  // const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  // const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const handleKakaoLogin = () => {
    setShowModal(true);
    // const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    // window.location.href = kakaoAuthUrl;
  };

  return (
    <div className="flex justify-center w-full">
      <button
        onClick={handleKakaoLogin}
        className="flex items-center justify-center w-full gap-[7px] py-2.5 bg-brand-yellow rounded-2xl text-grayscale-1000 text-title3"
      >
        <img src={kakao} alt="카카오톡" className="w-6 h-6" />
        카카오로 시작
      </button>

            {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#1C1C1EBF] backdrop-blur-none">
          <div className="w-full max-w-120 min-w-[375px]  mx-auto bg-white rounded-t-xl pt-6">
            <p className="text-center text-title2 text-black mb-8">아직 준비 중이에요!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mx-4 w-[calc(100%-2rem)] mb-6 py-[10.5px] text-title3 rounded-2xl text-white bg-black text-center"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}