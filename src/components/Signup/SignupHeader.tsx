import { Link } from "react-router-dom";

export default function SignupHeader() {
  return (
    <header className="flex items-center justify-start ml-[35px] mt-5">
      <Link to="/login">
        <img src="/Login/return_shape.svg" alt="뒤로 가기" className="w-4 h-8" />
      </Link>
      <h2 className=" text-center flex-1 text-title2 grayscale-900">회원가입</h2>
    </header>
  );
}