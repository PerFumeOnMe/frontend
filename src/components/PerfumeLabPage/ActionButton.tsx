interface ActionButtonProps {
  allNotesSelected: boolean;
  selectedVolume: string;
  onVolumeSelect: () => void;
  onResultView: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  allNotesSelected,
  selectedVolume,
  onVolumeSelect,
  onResultView,
}) => {
  return (
    <div className="w-full mt-1">
      {!allNotesSelected ? (
        <button
          className="w-full py-3 rounded-2xl text-grayscale-200 bg-grayscale-500"
          disabled
        >
          용량 설정하기
        </button>
      ) : !selectedVolume ? (
        <button
          className="w-full py-3 rounded-2xl bg-main-500 text-grayscale-200"
          onClick={onVolumeSelect}
        >
          용량 설정하기
        </button>
      ) : (
        <button
          className="w-full py-3 rounded-2xl bg-main-500 text-grayscale-200"
          onClick={onResultView}
        >
          결과보기
        </button>
      )}
    </div>
  );
};

export default ActionButton;
