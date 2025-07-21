const NoteCard = ({ note }: { note: string }) => {
  return (
    <div className="w-55 h-45 p-5 flex flex-col items-center rounded-lg shadow-[0_2px_10px_-1px_rgba(0,0,0,0.12)]">
      <span className="w-full border-b border-grayscale-400 pb-2.5 text-body3 text-center">
        {note}
      </span>
      <div className="pt-2.5 flex flex-col items-center gap-2">
        {/* 원료 및 연상단어의 내용은 API 연결 후 map으로 받아올 수 있도록 수정 */}
        <div className="flex items-center gap-2">
          <p className="text-body3 text-grayscale-900 font-semibold">원료</p>
          <span className="text-body3 text-grayscale-900">피오니</span>
          <span className="text-body3 text-grayscale-900">자스민</span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-body3 text-grayscale-900 font-semibold">
            연상 단어
          </p>
          <span className="text-body3 text-grayscale-900">싱그러움</span>
          <span className="text-body3 text-grayscale-900">햇살</span>
        </div>
        <p className="text-caption1 text-grayscale-900 text-center mt-1">
          아침 햇살 아래 주방에서 자몽이 들어간 과일 샐러드를 먹는 순간
        </p>
      </div>
    </div>
  );
};

export default NoteCard;
