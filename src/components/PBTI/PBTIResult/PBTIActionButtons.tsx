import BottomButton from "../../common/BottomButton";

type PBTIActionButtonsProps = {
  onSaveClick: () => void;
  onGoHome?: () => void; // 공유하기 버튼도 추후 확장 가능
};

const PBTIActionButtons: React.FC<PBTIActionButtonsProps> = ({
  onSaveClick,
  onGoHome,
}) => (
  <div className="flex w-full justify-between gap-5 mb-3">
    <BottomButton
      children="저장하기"
      onClick={onSaveClick}
      customClassName="text-main-500 text-title3 bg-white border-main-500 border-1 rounded-2xl w-full p-3"
      noPxValue={true}
    />
    
    <BottomButton
      children="홈으로"
      onClick={onGoHome}
      customClassName="bg-main-500 text-title3 text-white rounded-2xl w-full p-3"
      noPxValue={true}
    />

  </div>
);

export default PBTIActionButtons;
