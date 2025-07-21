import React from "react";

const recommendations = [
  {
    name: "Le Labo – Another 13",
    desc: "종이 냄새처럼 샤프하고 인공적인 감각이 매니큐어 느낌과 유사",
  },
  {
    name: "Chanel – No.5 Eau Première",
    desc: "알데하이드 특유의 반짝이고 비누 같은 향이 매니큐어를 연상시킴",
  },
  {
    name: "Juliette Has a Gun – Not a Perfume",
    desc: "깔끔하고 차가운 단일 향료의 인공적인 매력이 인상적",
  },
];

const features = [
  "약간 화학적이면서 시원하고 샤프한 느낌",
  "깨끗하고 인공적인 매력을 선호하는 취향",
  "보통 알데하이드, 앰브록산, 머스크, 금속성 노트에 끌림"
];

const RecommendationList: React.FC = () => (
  <div className="whitespace-pre-line text-[14px] font-[400]">
    {/* 1단계 */}
    <div className="mb-1">
      💅 매니큐어 향을 좋아하는 분들을 위한 향수 추천 요약
    </div>

    {/* 2단계 */}
    <div className="mb-1">
      <div className="mb-1">
      💡 매니큐어 향의 특징
      </div>
      <div className="flex flex-col space-y-1 text-[14px] leading-relaxed text-gray-800">
        {features.map((feature, idx) => (
          <div className="flex">
            <div className="px-2 before:content-['•']">
            </div>
            <div
              key={idx}
              className="before:text-gray-700"
            >
              {feature}
            </div>
          </div>
        ))}
      </div>
    </div>  

    {/* 3단계 */}
    <div>
      <div className="mb-1">
        🧴 추천 향수 3가지
      </div>
      <ul className="list-decimal list-inside">
        {recommendations.map((item, idx) => (
          <li key={idx}>
            <span className="font-semibold">{item.name}</span>
            <div className="ml-4">: {item.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default RecommendationList;
