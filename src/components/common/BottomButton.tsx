import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/bottonButton";

export default function BottomButton({ disabled = false, onClick, children, to, customClassName, noPxValue }: ButtonProps) {
  const baseClass =
    `w-full mb-6 py-[10.5px] text-title3 rounded-2xl text-white text-center block ` +
    (disabled ? "bg-grayscale-500" : "bg-main-500");

  const finalClass = customClassName ? `${customClassName}` : baseClass;

  const containerClass = `${noPxValue ? "" : "px-4 "}w-full mx-auto`;

  return (
    <div className={containerClass.trim()}>
      {to ? (
        <Link to={to} className={finalClass}>
          {children}
        </Link>
      ) : (
        <button disabled={disabled} onClick={onClick} className={finalClass}>
          {children}
        </button>
      )}
    </div>
  );
}
