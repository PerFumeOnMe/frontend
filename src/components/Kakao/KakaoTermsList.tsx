type TermsItem = {
  id: number;
  label: string;
  hasLink?: boolean;
};

type Props = {
  termsItems: TermsItem[];
  isAllChecked: boolean;
  onToggle: () => void;
};

export default function KakaoTermsList({ termsItems, isAllChecked, onToggle }: Props) {
  return (
    <section className="pt-4 space-y-2 w-full max-w-[305px] mx-auto">
      <div className="flex items-start justify-between px-2 cursor-pointer" onClick={onToggle}>
        <div className="flex items-start gap-1.5">
          <svg
            className={`w-4 h-4 mt-[2px] ${isAllChecked ? "text-[#FEE500]" : "text-[#C5C5C5]"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className=" text-[#838383] font-normal text-[13px] leading-[100%] tracking-[0]">
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

      {["닉네임", "계정", "전화번호", "별명"].map((label) => (
        <div key={label} className="flex items-start gap-1.5 pl-8 min-h-[20px] font-normal text-[13px] leading-[100%] tracking-[0]">
          {isAllChecked && (
            <svg
              className="w-4 h-4 mt-[2px] text-[#FEE500]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
          <span className="text-[13px] text-[#838383]">{label}</span>
        </div>
      ))}
    </section>
  );
}