import React from "react";

const recommendations = [
  {
    name: "Another 13",
    desc: "인공적이면서도 세련된 느낌의 머스크 향",
  },
  {
    name: "Chanel – No.5 Eau Première",
    desc: "알데하이드와 머스크의 조화, 비누 같은 향",
  },
  {
    name: "Juliette Has a Gun – Not a Perfume",
    desc: "깨끗하고 산뜻한 단일 분자의 머스크 향",
  },
];

const RecommendationList: React.FC = () => (
  <ul className="recommendation-list">
    {recommendations.map((item, idx) => (
      <li key={idx} className="mb-2">
        <strong>{item.name}</strong>: {item.desc}
      </li>
    ))}
  </ul>
);

export default RecommendationList;
