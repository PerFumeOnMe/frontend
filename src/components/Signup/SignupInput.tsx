import type { SignupInputProps } from "../../types/Login/signupTypes";

export default function SignupInput({
  type = "text",
  placeholder,
  value,
  onChange,
}: SignupInputProps) {
  const isFilled = value.trim().length > 0;

  return (
    <div className="px-4 w-full mx-auto">
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
