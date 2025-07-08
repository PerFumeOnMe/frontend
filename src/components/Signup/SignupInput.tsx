interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupInput({
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) {
  const isFilled = value.trim().length > 0;

  return (
    <div className="max-w-[361px] w-full mx-auto flex flex-col gap-[36px]">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border-b text-body3 outline-none
        ${isFilled ? "border-grayscale-900" : "border-grayscale-600"}`}
    />
    </div>
  );
}
