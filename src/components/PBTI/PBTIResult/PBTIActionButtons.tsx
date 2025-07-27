type PBTIActionButtonsProps = {
  onSaveClick: () => void;
  onShareClick?: () => void; // 공유하기 버튼도 추후 확장 가능
};

const PBTIActionButtons: React.FC<PBTIActionButtonsProps> = ({
  onSaveClick,
  onShareClick,
}) => (
  <div className="flex w-[93%] justify-between gap-5 mb-3">
    <button
      className="bg-main-500 text-white rounded-2xl w-full py-3"
      onClick={onShareClick}
    >
      공유하기
    </button>
    <button
      className="bg-main-500 text-white rounded-2xl w-full py-3"
      onClick={onSaveClick}
    >
      저장하기
    </button>
  </div>
);

export default PBTIActionButtons;
