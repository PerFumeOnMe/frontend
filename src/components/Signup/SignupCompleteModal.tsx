import { Link } from "react-router-dom";

export default function SignupCompleteModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#1C1C1EBF] backdrop-blur-none">
      <div className="w-full max-w-[400px] bg-white rounded-t-xl p-6">
        <p className="text-center font-bold text-base mb-6">회원가입이 완료되었습니다.</p>
        <Link
          to="/login"
          className="w-full block bg-purple-600 text-white py-3 rounded-md text-sm font-medium text-center"
        >
          로그인하러가기
        </Link>
      </div>
    </div>
  );
}