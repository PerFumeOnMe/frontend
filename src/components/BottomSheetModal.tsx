interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNote: string;
}

const BottomSheetModal = ({
  isOpen,
  onClose,
  selectedNote,
}: BottomSheetModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* 배경 오버레이 */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* 모달 컨테이너 */}
      <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
        <div className="w-full max-w-[480px] bg-white rounded-t-lg shadow-lg pointer-events-auto animate-slide-up">
          {/* 모달 핸들 */}
          <div className="flex justify-center py-2">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>

          {/* 모달 헤더 */}
          <div className="relative flex items-center px-4 py-3">
            <h2 className="text-lg font-semibold flex-1 text-center">
              {selectedNote} 노트 선택
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 absolute right-4"
            >
              ✕
            </button>
          </div>

          {/* 모달 내용 */}
          <div className="p-4 max-h-[50vh] overflow-y-auto">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">
                {selectedNote} 노트란?
              </h3>
              <p className="text-gray-600 text-xs">
                {selectedNote === "베이스" && (
                  <>
                    <span>베이스 노트는 향수의 여운입니다.</span>
                    <br />
                    <span>
                      시간이 흐를수록 은은하게 퍼지며, 향기의 정체성과 기억을
                      조용히 각인시킵니다.
                    </span>
                  </>
                )}
                {selectedNote === "미들" && (
                  <>
                    <span>미들 노트는 향수의 중심이 되는 향이에요.</span>
                    <br />
                    <span>
                      탑 노트가 사라진 후 퍼지며, 향의 분위기와 성격을 결정하죠.
                    </span>
                  </>
                )}
                {selectedNote === "탑" && (
                  <>
                    <span>향수의 첫인상입니다.</span>
                    <br />
                    <span>처음 뿌렸을 때 가장 먼저 느껴지는 향입니다.</span>
                  </>
                )}
              </p>
            </div>

            {/* 향수 노트 그리드 - 추후 백엔드로부터 데이터를 받으면 컴포넌트로 빼서 수정 예정 */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 1
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 2
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 3
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 4
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 5
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 6
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 1
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 2
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 3
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 4
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 5
              </div>
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm">
                향수 노트 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSheetModal;
