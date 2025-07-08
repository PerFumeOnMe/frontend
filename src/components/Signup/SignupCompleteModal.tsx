import SignupButton from "./SignupButton";

export default function SignupCompleteModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#1C1C1EBF] backdrop-blur-none ">
      <div className="w-full max-w-120 min-w-[375px] mx-auto bg-white rounded-t-xl pt-6">
        <p className="text-center text-title2 mb-[32px]">회원가입이 완료되었습니다.</p>
        <SignupButton to="/login">로그인하러가기</SignupButton>
      </div>
    </div>
  );
}
