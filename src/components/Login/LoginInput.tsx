type LoginInputProps = {
  type: string;
  icon: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function LoginInput({ type, placeholder, value, onChange }: LoginInputProps) {
  return (
    <div className="w-full ">
      <label className="flex items-center bg-[#A6A6A666] h-[55px] px-4 border border-white rounded-[5px]">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-white placeholder-white focus:outline-none text-title5"
        />
      </label>
    </div>
  );
}
