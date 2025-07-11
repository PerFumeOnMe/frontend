import { Link } from "react-router-dom";

type Props = {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  to?: string; 
};

export default function SignupButton({ disabled = false, onClick, children, to }: Props) {
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
