import { Link } from "react-router-dom";

export default function SignupModal() {
  return (
    <section className="fixed inset-0 backdrop-blur-none bg-[#00000033] flex items-end justify-center z-50">
      <div className="w-[480px] h-[200px] bg-white rounded-t-xl shadow-lg flex flex-col items-center text-xl justify-center py-0 pt-[51px]">
        <p className="flex items-center justify-center mb-[49px] font-bold">
          회원가입이 완료되었습니다.
        </p>
        <Link
          className="flex items-center justify-center w-110 h-[50px] mb-[29px] bg-black text-white text-xl rounded-md"
          to="/login"
        >
          로그인하러가기
        </Link>
      </div>
    </section>
  );
}
