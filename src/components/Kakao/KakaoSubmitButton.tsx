type Props = {
  isEnabled: boolean;
  onClick: () => void;
};

export default function KakaoSubmitButton({ isEnabled, onClick }: Props) {
  return (
    <button
      type="submit"
      disabled={!isEnabled}
      onClick={onClick}
      className={`w-full text-xl py-5 rounded-br-[10px] rounded-bl-[10px] transition font-normal text-[20px] leading-[100%] tracking-[0] ${
        isEnabled ? "bg-[#FEE500] text-black cursor-pointer" : "bg-[#D9D9D9] text-black cursor-not-allowed"
      }`}
    >
      동의하고 계속하기
    </button>
  );
}
