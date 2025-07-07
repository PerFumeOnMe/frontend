type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

export default function SignupField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: Props) {
  return (
    <fieldset className="h-[76px]">
      <label className="block text-lg text-black mb-[1px] font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-base border-b border-[#D5D5D5] outline-none py-2 placeholder:pl-[6px]"
      />
    </fieldset>
  );
}
