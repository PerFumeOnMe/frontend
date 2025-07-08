export default function SignupButton({ disabled, onClick, children }: {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-[361px] mb-8 py-[10.5px] text-title3 rounded-2xl ${
        disabled ? "bg-grayscale-500 text-white" : "bg-main-500 text-white"
      }`}
    >
      {children}
    </button>
  );
}