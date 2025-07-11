import { Link } from "react-router-dom";

export default function SignupGuide() {
  return (
    <p className="flex justify-center text-grayscale-800 text-body3 mt-4">
      아이디가 없다면?
      <Link to="/signup" className="ml-2 underline">
        회원가입
      </Link>
    </p>
  );
}
