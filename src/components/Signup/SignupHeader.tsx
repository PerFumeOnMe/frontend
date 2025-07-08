import { Link } from "react-router-dom";
import returnIcon from "../../assets/Login/return_shape.svg";

export default function SignupHeader() {
  return (
    <header className="flex items-center justify-start ml-6 mt-5 ">
      <Link to="/login">
      <div className="w-4 h-8 mt-[1px]">
        <img src={returnIcon} alt="뒤로 가기" className="ml-[1.34px] mt-[4.67px]" />
      </div>  
      </Link>
      <h2 className=" flex-1 text-title2 text-grayscale-900 mt-[1px] text-center">회원가입</h2>
      <div className="w-4 h-8" />
    </header> 
  );
}