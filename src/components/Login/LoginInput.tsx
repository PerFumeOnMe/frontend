import type { LoginInputProps } from "../../types/Login/loginTypes";

export default function LoginInput({ type, placeholder, value, onChange }: LoginInputProps) {
  return (
    <div className="w-full">
      <label className="flex items-center text-grayscale-900 py-3 px-4 border border-grayscale-700 bg-white-50 rounded-2xl">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent placeholder-grayscale-900 focus:outline-none text-body3"
        />
      </label>
    </div>
  );
}
