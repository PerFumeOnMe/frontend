import returnIcon from "../../assets/Login/ReturnShape.png";

type Props = {
  title: string;
   onBack?: () => void; // 뒤로가기
};

export default function PageHeader({ title, onBack }: Props) {
  return (
    <header className="relative flex items-center justify-center h-[27px] mt-6 ml-[11px]">
      {/* 제목 */}
      <h2 className="text-title3 text-grayscale-900 text-center">{title}</h2>

      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center"
        >
          <img
            src={returnIcon}
            alt="뒤로가기"
            className="ml-[6px] mt-[3px] mb-[1.33px]"
          />
        </button>
      )}
    </header>
  );
}
