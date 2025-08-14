import type { KakaoTermsListProps } from "../../types/Login/kakaoSignupTypes";

export default function KakaoTermsList({ termsItems, isAllChecked, onToggle }: KakaoTermsListProps,TermsItem) {
  return (
    <section className="pt-6 space-y-2 mx-auto">
      <div className="flex items-start justify-between px-2 cursor-pointer" onClick={onToggle}>
        <div className="flex items-start gap-1.5">
          <svg
            className={`w-4 h-4 ${isAllChecked ? "text-[#FEE500]" : "text-black-40"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className=" text-black-40 text-title10">
            [필수] 카카오 개인정보 제3자 제공 동의
          </span>
        </div>
        <a
          href="https://www.kakao.com/ko/terms"
          className="font-normal text-[13px] leading-[100%] underline decoration-solid decoration-[0.5px] decoration-offset-[0px] underline-offset-0 text-[#838383] ml-2"
        >
          보기
        </a>
      </div>

      <div className="space-y-1.5 pl-8 text-black-40">
        {["닉네임", "계정", "전화번호", "별명"].map((label, index, arr) => (
          <div
            key={label}
            className={`flex items-center gap-1.5 min-h-5 text-title10 text-grayscale-550 ${
              index === arr.length - 1 ? "mb-12.5" : ""
            }`}
          >
            {isAllChecked && (
              <svg
                className="w-4 h-4 mt-[1px] text-[#FEE500]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}