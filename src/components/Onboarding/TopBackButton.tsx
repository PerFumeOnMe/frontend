import { useNavigate } from "react-router-dom";

export default function TopBackButton({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={onClick ?? (() => navigate(-1))}
      className="absolute left-[6px] top-[1px] w-[24px] h-[24px] flex items-center justify-center"
      aria-label="뒤로가기"
    >
      <img
        src="/src/assets/Onboarding/return_shape.svg"
        alt="뒤로가기"
        className="w-[12px] h-[22.67px]"
      />
    </button>
  );
}