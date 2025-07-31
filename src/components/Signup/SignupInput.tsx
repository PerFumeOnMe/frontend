import { useRef, useState } from "react";
import { BsXCircle } from "react-icons/bs";
import type { SignupInputProps } from "../../types/Login/signupTypes";

export default function SignupInput({
  type = "text",
  placeholder,
  value,
  onChange,
}: SignupInputProps) {
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFilled = value.trim().length > 0;
  // 작성 완료 상태
  const isCompleted = isFilled && !isTyping; 

  const handleClear = () => {
    const input = inputRef.current;
    if (input) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      nativeInputValueSetter?.call(input, "");

      const event = new Event("input", { bubbles: true });
      input.dispatchEvent(event);
    }
  };

  return (
    <div className="relative px-4 w-full mx-auto">
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
        className={`
          w-full border-b outline-none text-body3
          ${isCompleted
            ? "border-grayscale-900 text-grayscale-900"
            : "border-grayscale-600 text-grayscale-600"}
        `}
      />

      {isFilled && isTyping && (
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            handleClear();
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2"
        >
          <BsXCircle className="text-xl text-grayscale-500" />
        </button>
      )}
    </div>
  );
}
