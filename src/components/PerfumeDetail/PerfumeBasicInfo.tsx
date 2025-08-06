import { useEffect, useState } from "react";
import CapacityButton from "./CapacityButton";
import { usePerfumeBasicInfo } from "../../hooks/usePerfumeDetail";

const PerfumeBasicInfo = () => {
  const { brand, name, keyword, priceList } = usePerfumeBasicInfo();
  const [selectedCapacity, setSelectedCapacity] = useState<number | null>(null);

  useEffect(() => {
    if (priceList && priceList.length > 0 && selectedCapacity === null) {
      setSelectedCapacity(priceList[0].mlcount);
    }
  }, [priceList, selectedCapacity]);

  const getCurrentPrice = () => {
    if (!priceList || selectedCapacity === null) return null;
    const selectedItem = priceList.find(
      (item) => item.mlcount === selectedCapacity
    );
    return selectedItem?.price;
  };

  const getHashtags = (keyword: string | undefined) => {
    if (!keyword) return [];
    return keyword
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
      .map((tag) => `#${tag} `);
  };

  const currentPrice = getCurrentPrice();
  const hashtags = getHashtags(keyword);
  const isLongBrand = brand && brand.length > 20;

  return (
    <div className="w-full bg-[#FBFBFB]/20 rounded-3xl border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.05),0_10px_10px_-3px_rgba(0,0,0,0.05)]">
      <div className="pt-5 pb-5 pl-10 pr-10">
        <div
          className={`flex ${
            isLongBrand ? "flex-col" : "flex-row items-center"
          } gap-2`}
        >
          <h1 className="text-body3 text-grayscale-800">{brand}</h1>
          <p className="text-caption2 text-grayscale-700">{hashtags}</p>
        </div>
        <div className="mt-1 flex flex-col">
          <h1 className="text-title4">{name}</h1>
        </div>
        <p className="mt-1 text-title4">
          {currentPrice ? `${currentPrice.toLocaleString()}원` : "가격"}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {priceList?.map((item) => (
            <CapacityButton
              key={item.mlcount}
              capacity={`${item.mlcount}ml`}
              onClick={() => setSelectedCapacity(item.mlcount)}
              isSelected={selectedCapacity === item.mlcount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerfumeBasicInfo;
