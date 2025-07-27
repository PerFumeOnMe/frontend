import PBTIRecommendedPerfume from "./PBTIRecommendedPerfume";

const recommendedPerfumes = [
  {
    id: 1,
    imageUrl: "/images/perfume1.png",
    brand: "브랜드 이름",
    name: "제품명",
    price: "320,000원~",
    description:
      "다채로운 시트러스가 첫인상을 선명하게 채우는 이탈리안 클래식 향. (갓 짜낸 레몬 청을 두른 갓 구운 크로와상 같은 상큼함)",
  },
  {
    id: 2,
    imageUrl: "/images/perfume2.png",
    brand: "브랜드 이름",
    name: "제품명2",
    price: "280,000원~",
    description:
      "포근한 머스크와 우디한 베이스가 안정감 있게 지속되는 감성적인 향.",
  },
  {
    id: 3,
    imageUrl: "/images/perfume3.png",
    brand: "브랜드 이름",
    name: "제품명3",
    price: "210,000원~",
    description:
      "허브 노트가 중심이 되어 상쾌하고 자연에 가까운 향을 선사해요.",
  },
];

const PBTIRecommendedPerfumesSection = () => (
  <div className="w-full flex flex-col bg-white rounded-2xl p-5 shadow mb-6">
    <h2 className="text-title3 font-semibold mb-4">이런 향수가 잘 어울려요</h2>
    <div className="space-y-4">
      {recommendedPerfumes.map((perfume) => (
        <PBTIRecommendedPerfume key={perfume.id} {...perfume} />
      ))}
    </div>
  </div>
);

export default PBTIRecommendedPerfumesSection;
