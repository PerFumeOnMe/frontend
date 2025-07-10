import { Link } from "react-router-dom";
import kakao from '../../assets/Login/kakao.svg';

export default function SocialLogin() {
  return (
    <div className="flex justify-center w-full">
      <Link
        to="/kakao"
        className="flex items-center justify-center w-full gap-[7px] py-2.5 bg-[#FEE500] rounded-2xl text-grayscale-1000 text-title3"
      >
        <img src={kakao} alt="카카오톡" className="w-6 h-6" />
        카카오로 시작
      </Link>
    </div>
  );
}
