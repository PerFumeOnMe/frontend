import { Link } from "react-router-dom";
import returnIcon from "../../assets/Login/return_shape.svg";

export default function SignupHeader() {
  return (
    <header className="relative flex items-center justify-center h-[27px] mt-6 ml-[11px]">
      <h2 className="text-title3 text-grayscale-900 text-center">
        회원가입
      </h2>

      <Link
        to="/login"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center"
      >
        <img src={returnIcon} alt="뒤로 가기"
             className="ml-[6px] mt-[3px] mb-[1.33px]"/>   
      </Link>
    </header>
  );
}

