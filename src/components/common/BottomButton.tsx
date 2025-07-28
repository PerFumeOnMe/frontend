import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/bottonButton";

export default function BottomButton({ disabled = false, onClick, children, to }: ButtonProps) {
  const baseClass =
    `w-full mb-6 py-[10.5px] text-title3 rounded-2xl text-white text-center block ` +
    (disabled ? "bg-grayscale-500" : "bg-main-500");

  return (
    <div className="px-4 w-full mx-auto">
      {to ? (
        <Link to={to} className={baseClass}>
          {children}
        </Link>
      ) : (
        <button disabled={disabled} onClick={onClick} className={baseClass}>
          {children}
        </button>
      )}
    </div>
  );
}
