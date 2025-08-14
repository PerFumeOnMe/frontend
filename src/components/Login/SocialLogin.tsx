import kakao from '../../assets/Login/kakao.png';

export default function SocialLogin() {
  const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
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
    </div>
  );
}