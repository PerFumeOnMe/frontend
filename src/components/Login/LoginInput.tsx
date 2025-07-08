type LoginInputProps = {
  type: string;
  icon: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function LoginInput({ type, icon, placeholder, value, onChange }: LoginInputProps) {
  return (
    <div className="w-full ">
      <label className="flex items-center bg-[#A6A6A666] h-[55px] px-4 border border-white rounded-[5px]">
        <img src={icon} alt={`${placeholder} 아이콘`} className="w-5 h-5 mr-3" />
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
