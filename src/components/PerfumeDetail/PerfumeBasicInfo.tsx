import { useState } from "react";
import CapacityButton from "./CapacityButton";

const PerfumeBasicInfo = () => {
  const [selectedCapacity, setSelectedCapacity] = useState("30ml");

  return (
    <div className="w-full bg-[#FBFBFB]/20 rounded-3xl border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.05),0_10px_10px_-3px_rgba(0,0,0,0.05)]">
      <div className="pt-5 pb-5 pl-10 pr-10">
        <div className="flex items-center gap-4">
          <h1 className="text-body3 text-grayscale-800">향수 브랜드</h1>
          <p className="text-caption2 text-grayscale-700">
            # 향수 태그1 # 향수 태그2
          </p>
        </div>
        <div className="mt-1 flex flex-col">
          <h1 className="text-title4">향수 이름</h1>
          <p className="mt-1 text-title4">가격</p>
        </div>
        {/* api 연결 후 용량 정보 개수에 따라 버튼 수 달라지도록 설정 */}
        <div className="flex flex-items gap-1 mt-2">
          <CapacityButton
            capacity="30ml"
            onClick={() => setSelectedCapacity("30ml")}
            isSelected={selectedCapacity === "30ml"}
          />
          <CapacityButton
            capacity="50ml"
            onClick={() => setSelectedCapacity("50ml")}
            isSelected={selectedCapacity === "50ml"}
          />
          <CapacityButton
            capacity="100ml"
            onClick={() => setSelectedCapacity("100ml")}
            isSelected={selectedCapacity === "100ml"}
          />
        </div>
      </div>
    </div>
  );
};

export default PerfumeBasicInfo;
