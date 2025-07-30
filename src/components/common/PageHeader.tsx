import returnIcon from "../../assets/Login/ReturnShape.png";

type Props = {
  title: string;       // 제목
  onBack?: () => void; // 뒤로가기
  centerSlot?: React.ReactNode; // 중앙에 Progress 같은 커스텀 UI
};

export default function PageHeader({ title, onBack, centerSlot }: Props) {
  return (
    <header className="relative flex items-center justify-center h-[27px] mt-6 ml-[11px]">
      {/* 중앙에 Progress가 있으면 우선 보여주고, 아니면 title */}
      {centerSlot ? centerSlot : (
        title && <h2 className="text-title3 text-grayscale-900 text-center">{title}</h2>
      )}

      {/* 뒤로가기 버튼 */}
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