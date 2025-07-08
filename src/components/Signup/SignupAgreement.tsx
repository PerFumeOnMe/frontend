import SignupDropdown from "./SignupDropdown";
import upIcon from "../../assets/Login/up_shape.svg";
import downIcon from "../../assets/Login/down_shape.svg";

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
    <section className="w-full max-w-[361px] mx-auto ">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-[10px] text-body3 cursor-pointer">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="sr-only peer"
          />
          <span
            className="w-5 h-5 rounded-full border flex items-center justify-center 
              transition-colors duration-200
              bg-grayscale-400 border-none
              peer-checked:bg-[var(--grayscale-900)] peer-checked:border-grayscale-900"
          >
            <svg
              className="w-3 h-3 text-grayscale-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-body3 text-grayscale-1000">개인정보 수집 및 이용 동의서</span>
        </label>
        <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img
          src={isDropdownOpen ? upIcon  : downIcon}
          alt="드롭다운 버튼"
          />
        </button>
      </div>

      {isDropdownOpen && <SignupDropdown />}
    </section>
  );
}

