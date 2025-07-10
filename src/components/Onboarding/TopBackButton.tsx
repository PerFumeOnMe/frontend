import { useNavigate } from "react-router-dom";

export default function TopBackButton({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={onClick ?? (() => navigate(-1))}
      className=" w-[24px] h-[24px] "
      aria-label="뒤로가기"
    >
      <img
        src="/src/assets/Onboarding/return_shape.svg"
        alt="뒤로가기"
        className="w-[12px] h-[22.67px] mx-[6px] mt-[1px] mb-[0.33px] z-10 cursor-pointer"
      />
    </button>
  );
}