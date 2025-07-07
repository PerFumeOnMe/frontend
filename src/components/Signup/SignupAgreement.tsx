import SignupDropdown from "./SignupDropdown";

type Props = {
  isAgreed: boolean;
  setIsAgreed: (val: boolean) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (val: boolean) => void;
};

export default function SignupAgreement({
  isAgreed,
  setIsAgreed,
  isDropdownOpen,
  setIsDropdownOpen,
}: Props) {
  return (
    <section className="mx-auto w-full max-w-[372px]">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-[10px] text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="sr-only peer"
          />
          <span
            className="w-5 h-5 rounded-full border flex items-center justify-center 
              transition-colors duration-200
              bg-[#D9D9D9] border-[#D9D9D9]
              peer-checked:bg-black peer-checked:border-black"
          >
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>개인정보 수집 및 이용 동의서</span>
        </label>
        <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img src="/Login/down_shape.svg" alt="드롭다운 버튼" />
        </button>
      </div>

      {isDropdownOpen && <SignupDropdown />}
    </section>
  );
}

