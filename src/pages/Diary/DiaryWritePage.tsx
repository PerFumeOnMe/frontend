import { useSearchParams } from "react-router-dom";

export default function DiaryWritePage() {
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get("date") || new Date().toISOString().split("T")[0];

  return (
    //헤더랑 버튼 공용 컴포넌트로 빼서 정리?...
    <div className="min-w-[375px] w-120 mx-auto h-screen bg-white px-4 py-6 flex flex-col">
      {/*헤더*/}
      <div className="flex items-center mb-6">
        <button
          onClick={() => window.history.back()} 
          className="mr-2 text-lg"
        >
        </button>
        <h1 className="text-title3">퍼퓸다이어리</h1>
      </div>

      {/*향수 입력*/}
      <label className="text-title4 mb-3 text-grayscale-900 ">뿌린 향수는 무엇인가요?</label>
      <input
        type="text"
        className="border border-grayscale-400 rounded-lg p-3 mb-6"
      />

      {/*날짜 선택*/}
      <label className="text-title4 mb-3 text-grayscale-900">언제 경험하셨나요?</label>
      <input
        type="date"
        className="border border-grayscale-400 rounded-lg p-3 mb-6  [&::-webkit-calendar-picker-indicator]:hidden"
        defaultValue={selectedDate}
      />

      {/*경험*/}
      <label className="text-title4 mb-3 text-grayscale-900">어떤 경험을 하셨나요?</label>
      <textarea
        className="border border-grayscale-700 rounded-lg p-3 flex-1 resize-none"
        placeholder="어떤 경험을 하셨는지 적어주세요!"
      ></textarea>

      {/*저장 버튼*/}
      <button className="mt-6 py-4 rounded-2xl bg-main-500 text-white text-center">
        저장
      </button>
    </div>
  );
}
