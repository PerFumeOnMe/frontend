import { Link } from "react-router-dom";

export default function SocialLogin() {
  return (
    <div className="flex justify-center pt-[28px]">
      <Link
        to="/kakao"
        className="flex items-center justify-center gap-[7px] w-96 h-[55px] bg-yellow-400 rounded-[30px] text-black font-bold"
      >
        <img src="/Login/kakao.svg" alt="카카오톡" className="w-5 h-5" />
        카카오로 시작
      </Link>
    </div>
  );
}
