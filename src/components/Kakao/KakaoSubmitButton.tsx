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
      className={`w-[361px] text-xl py-[20px] rounded-br-[10px] rounded-bl-[10px] transition ${
        isEnabled ? "bg-[#FEE500] text-black cursor-pointer" : "bg-[#D9D9D9] text-black cursor-not-allowed"
      }`}
    >
      동의하고 계속하기
    </button>
  );
}
