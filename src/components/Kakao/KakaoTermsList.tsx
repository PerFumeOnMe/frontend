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
    <section className="pt-6 space-y-2 w-full max-w-[318px] mx-auto">
      <div className="flex items-start justify-between px-2 cursor-pointer" onClick={onToggle}>
        <div className="flex items-start gap-1.5">
          <svg
            className={`w-4 h-4 ${isAllChecked ? "text-[#FEE500]" : "text-[#C5C5C5]"}`}
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

      <div className="space-y-[6px] pl-8">
        {["닉네임", "계정", "전화번호", "별명"].map((label, index, arr) => (
          <div
            key={label}
            className={`flex items-center gap-1.5 min-h-[20px] text-[13px] leading-[16px] text-[#838383] ${
              index === arr.length - 1 ? "mb-[51px]" : ""
            }`}
          >
            {isAllChecked && (
              <svg
                className="w-[16px] h-[16px] mt-[1px] text-[#FEE500]"
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