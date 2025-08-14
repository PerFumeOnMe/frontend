import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import BottomButton from "../../components/common/BottomButton";
import { axiosInstance } from "../../apis/axios";

export default function DiaryWritePage() {
  const [searchParams] = useSearchParams();
  const selectedDate =
    searchParams.get("date") || new Date().toISOString().split("T")[0];

  const [perfume, setPerfume] = useState("");
  const [experience, setExperience] = useState("");
  const isFormValid = perfume.trim() !== "" && experience.trim() !== "";

  const handleSave = async () => {
    try {
      const response = await axiosInstance.post("/diary/write", {
        fragranceName: perfume,
        date: selectedDate,
        content: experience,
      });

      console.log("다이어리 추가 응답:", response.data);

      if (response.data.isSuccess) {
    //    alert(response.data.message);
        window.history.back();
      } else {
        alert(response.data.message || "저장 실패");
      }
    } catch (error) {
      console.error("다이어리 저장 오류:", error);
      alert("다이어리 저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col sm:max-w-120 sm:min-w-[375px] mx-auto">
      <PageHeader title="퍼퓸다이어리" onBack={() => window.history.back()} />

      <div className="px-4 py-6 flex flex-col flex-1">
        {/* 향수 입력 */}
        <label className="text-title4 mb-3 text-grayscale-900">
          뿌린 향수는 무엇인가요?
        </label>
        <input
          type="text"
          value={perfume}
          onChange={(e) => setPerfume(e.target.value)}
          className="border border-grayscale-400 rounded-lg p-3 mb-4
                     focus:outline-none focus:ring-0 focus:shadow-none focus:border-grayscale-400"
        />

        {/* 날짜 선택 */}
        <label className="text-title4 mb-3 text-grayscale-900">
          언제 경험하셨나요?
        </label>
        <input
          type="date"
          className="border border-grayscale-400 rounded-lg p-3 mb-4 [&::-webkit-calendar-picker-indicator]:hidden
                     focus:outline-none focus:ring-0 focus:shadow-none focus:border-grayscale-400"
          defaultValue={selectedDate}
          readOnly
        />

        {/* 경험 */}
        <label className="text-title4 mb-3 text-grayscale-900">
          어떤 경험을 하셨나요?
        </label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border border-grayscale-700 rounded-lg p-3 flex-1 resize-none placeholder:text-body3
                     focus:outline-none focus:ring-0 focus:shadow-none focus:border-grayscale-700"
          placeholder="어떤 경험을 하셨는지 적어주세요!"
        ></textarea>
      </div>

      <div className="mt-auto w-full">
        <BottomButton disabled={!isFormValid} onClick={handleSave}>
          저장
        </BottomButton>
      </div>
    </div>
  );
}
