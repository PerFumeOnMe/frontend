import type { KakaoSubmitButtonProps } from "../../types/Login/kakaoSignupTypes";

export default function KakaoSubmitButton({ isEnabled, onClick }: KakaoSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={!isEnabled}
      onClick={onClick}
      className={`w-full text-xl py-5 rounded-br-[10px] rounded-bl-[10px] transition font-normal text-[20px] leading-[100%] tracking-[0] ${
        isEnabled ? "bg-brand-yellow text-black cursor-pointer" : "bg-grayscale-250 text-black cursor-not-allowed"
      }`}
    >
      동의하고 계속하기
    </button>
  );
}
