type Props = {
  isAllChecked: boolean;
  onToggle: () => void;
};

export default function KakaoAgreementSection({ isAllChecked, onToggle }: Props) {
  return (
    <section className="border-b border-[#0000004D] pt-[10px] pb-[24px]">
      <label className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={onToggle}
          className="sr-only peer"
        />
        <span
          className="w-[20px] h-[20px] rounded-full border flex items-center justify-center
          transition-colors duration-200
          bg-white border-[#838383]
          peer-checked:bg-[#FEE500] peer-checked:border-[#FEE500]"
        >
          <svg
            className="w-[13px] h-[13px] text-[#838383] peer-checked:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-sm font-bold text-black">전체 동의하기</span>
      </label>

      <p className="text-[10px] leading-[16px] font-medium w-[287px] ml-[27px] text-[#00000066]">
        전체동의는 선택목적에 대한 동의를 포함하고 있으며,
        선택목적에 대한 동의를 거부해도 서비스 이용이 가능합니다.
      </p>
    </section>
  );
}
