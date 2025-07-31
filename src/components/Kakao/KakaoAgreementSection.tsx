import type { KakaoAgreementSectionProps } from "../../types/Login/kakaoSignupTypes";

export default function KakaoAgreementSection({ isAllChecked, onToggle }: KakaoAgreementSectionProps) {
  return (
    <section className="w-full  border-b border-black-30 pt-0.5 pb-6">
      <label className="flex items-center gap-2 ">
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={onToggle}
          className="sr-only peer"
        />
        <span
          className="w-5 h-5 rounded-full border flex items-center justify-center
          transition-colors duration-200
          bg-white border-grayscale-550 text-grayscale-550
          peer-checked:bg-[#FEE500] peer-checked:border-[#FEE500] peer-checked:text-white"
        >
          <svg
            className="w-[0.75rem] h-[0.75rem] text-inherit"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-title7 text-black">전체 동의하기</span>
      </label>

      <p className="text-title8 ml-[27px] text-black-40 break-words">
        전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한 
        동의를 거부해도 서비스 이용이 가능합니다.
      </p>
    </section>
  );
}
