import NoteCard from "./NoteCard";

const DescriptionNote = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h1 className="text-title4">노트</h1>
        <p className="text-caption1 text-grayscale-700">
          향수에서 각 원료의 향을 설명하는 말이에요.
        </p>
      </div>
      {/* 향수 노트 설명 카드 - map으로 3개의 카드 나열 */}
      <div className="m-6 flex justify-center items-center">
        <NoteCard note="Top" />
      </div>
    </div>
  );
};

export default DescriptionNote;
