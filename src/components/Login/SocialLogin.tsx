import { Link } from "react-router-dom";

export default function SocialLogin() {
  return (
    <div className="flex justify-center w-full pt-[28px]">
      <Link
        to="/kakao"
        className="flex items-center justify-center w-full gap-[7px] h-[55px] bg-[#FEE500] rounded-[30px] text-black text-button1 "
      >
        <img src="/Login/kakao.svg" alt="카카오톡" className="w-5 h-5" />
        카카오로 시작
      </Link>
    </div>
  );
}
