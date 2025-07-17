interface SelectedNotes {
  베이스: { id: string; description: string };
  미들: { id: string; description: string };
  탑: { id: string; description: string };
}

interface PerfumeDisplayProps {
  selectedNotes: SelectedNotes;
  perfumeImage: string;
}

const PerfumeDisplay: React.FC<PerfumeDisplayProps> = ({
  selectedNotes,
  perfumeImage,
}) => {
  return (
    <div className="flex flex-row">
      {/* 이미지 영역 */}
      <div className="flex-1">
        <img
          src={perfumeImage}
          className="w-full h-auto object-contain"
          alt="향수 공병"
        />
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        {selectedNotes.탑.id && (
          <div className="text-center">
            <h4 className="text-body3 text-main-500 mb-2">탑 노트</h4>
            <p className="text-caption2 text-grayscale-700">
              {selectedNotes.탑.id}
            </p>
          </div>
        )}

        {selectedNotes.미들.id && (
          <div className="text-center">
            <h4 className="text-body3 text-main-500 mb-2">미들 노트</h4>
            <p className="text-caption2 text-grayscale-700">
              {selectedNotes.미들.id}
            </p>
          </div>
        )}

        {selectedNotes.베이스.id && (
          <div className="text-center">
            <h4 className="text-body3 text-main-500 mb-2">베이스 노트</h4>
            <p className="text-caption2 text-grayscale-700">
              {selectedNotes.베이스.id}
            </p>
          </div>
        )}

        {!selectedNotes.베이스.id && (
          <div className="text-center text-grayscale-500">
            <p className="text-caption2">
              노트를 선택하여
              <br />
              향수를 만들어보세요
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfumeDisplay;
