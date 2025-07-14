import { useNavigate } from "react-router-dom"; 

type Props = {
  onClick: () => void;
};

export default function TopBackButton({ onClick }: Props) {
  const navigate = useNavigate(); 

  return (
    <button
      onClick={onClick ?? (() => navigate(-1))}
      className="relative z-10 w-6 h-6 "
      aria-label="뒤로가기"
    >
      <img
        src="/src/assets/Onboarding/return_shape.svg"
        alt="뒤로가기"
        className="w-3 h-[22.67px] mx-1.5 mt-px cursor-pointer"
      />
    </button>
  );
}