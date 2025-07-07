import { Link } from "react-router-dom";

export default function SignupHeader() {
  return (
    <header className="flex items-center justify-start ml-[35px] mt-[36px]">
      <Link to="/login">
        <img src="/Login/return_shape.svg" alt="뒤로 가기" className="w-[11px] h-[18px]" />
      </Link>
      <h2 className="ml-[24px] text-xl font-semibold">로그인에 사용할 정보를 입력해주세요.</h2>
    </header>
  );
}
