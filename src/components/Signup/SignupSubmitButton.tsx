type Props = {
  disabled: boolean;
  onClick: () => void;
};

export default function SignupSubmitButton({ disabled, onClick }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`text-2xl text-white py-[18px] w-full ${
        disabled ? "bg-[#AAAAAA] cursor-not-allowed" : "bg-black cursor-pointer"
      }`}
    >
      회원가입
    </button>
  );
}
