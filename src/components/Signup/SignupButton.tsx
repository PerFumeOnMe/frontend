export default function SignupButton({ disabled, onClick, children }: {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full py-4 text-base font-semibold rounded-b-xl ${
        disabled ? "bg-gray-300 text-white" : "bg-purple-600 text-white"
      }`}
    >
      {children}
    </button>
  );
}