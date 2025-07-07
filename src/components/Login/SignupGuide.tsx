import { Link } from "react-router-dom";

export default function SignupGuide() {
  return (
    <p className="flex justify-center mt-[13px] text-white text-lg">
      아이디가 없다면?
      <Link to="/signup" className="pl-[14px] underline">
        회원가입
      </Link>
    </p>
  );
}
