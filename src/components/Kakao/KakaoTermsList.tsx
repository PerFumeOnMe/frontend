type TermsItem = {
  id: number;
  label: string;
  hasLink?: boolean;
};

type Props = {
  termsItems: TermsItem[];
  isAllChecked: boolean;
};

export default function KakaoTermsList({ termsItems, isAllChecked }: Props) {
  return (
    <section className="pt-4 space-y-2">
      {termsItems.map((item, index) => (
        <div key={item.id} className="flex items-center ml-[8px] justify-between">
          <div className="flex items-center">
            {index === 0 || isAllChecked ? (
              <svg
                className={`w-4 h-4 ${isAllChecked ? "text-[#FEE500]" : "text-[#C5C5C5]"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : null}
            <span className={`text-[13px] text-[#838383] ${index === 0 ? "ml-[12px]" : "ml-[31px]"}`}>
              {item.label}
            </span>
          </div>
          {item.hasLink && (
            <a href="https://www.kakao.com/ko/terms" className="underline font-normal text-[13px] text-[#838383] ml-auto">
              보기
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
