import PerfumeDisplay from "./PerfumeResultDisplay";
import ContentBox from "./ContentBox";
import perfumeImage from "../../../assets/PerfumeLab/perfume.png";
import { usePerfumeLab } from "../../../contexts/PerfumeLabContext";
import { useEffect } from "react";

const ResultContent = () => {
  const { completedPerfume } = usePerfumeLab();

  useEffect(() => {
    if (completedPerfume) {
      console.log("Completed Perfume:", completedPerfume);
    }
  }, [completedPerfume]);

  return (
    <div className="w-full gap-6 flex flex-col items-center">
      <div className="w-full  bg-[#FBFBFB]/30 rounded-3xl p-5 text-center border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.02),0_10px_10px_-3px_rgba(0,0,0,0.02)]">
        <PerfumeDisplay perfumeImage={perfumeImage} />
      </div>

      <ContentBox
        title="🖼️ 시각적 키워드 요약"
        content="#상큼한첫인상 #감성적중심 
                #우디잔향 #깊이있는사람 #신뢰감있는향기"
      />
      <ContentBox
        title="🪄 향기의 첫인상"
        content="상큼한 시트러스가 먼저 퍼지며,
                활기차고 개방적인 에너지를 전달합니다.
                마치 첫 만남에서 웃으며 인사하는 당신의 모습처럼,
                누구에게나 긍정적인 첫인상을 남깁니다."
      />
      <ContentBox
        title="🌸 중심을 잡는 향"
        content="곧이어 재스민의 은은한 꽃향기가 중심을 잡습니다.
                부드럽고 감성적인 분위기를 더하며, 
                당신의 내면에 깃든 섬세함과 따뜻함을 보여줍니다."
      />
      <ContentBox
        title="🌲 마지막에 남는 잔향"
        content="이 향기의 핵심은 단연 우디 노트입니다. 
        진한 나무 향은 안정감, 진중함, 신뢰감을 상징하며 
        당신이 속이 깊고 조용한 울림이 있는 사람임을 암시합니다."
      />
      <ContentBox
        title="🧠 향기로 해석한 당신의 향"
        content="겉으로는 밝고 유쾌하며 누구든 쉽게 다가갈 수 있는 사람
                하지만 곧 섬세하고 부드러운 내면이 드러나고
                마지막엔 단단하고 흔들림 없는 중심이 느껴집니다."
        caption="당신은 사람들에게
                기분 좋은 여운이 오래 남는 사람으로 기억됩니다."
      />
      <ContentBox
        title="🎁 당신에게 어울리는 향수 추천"
        perfumes={[
          {
            brand: "Chanel",
            name: "Bleu de Chanel",
            description:
              "다채로운 시트러스가 첫인상을 선명하게 채우는 이탈리안 클래식 향. (갓 짜낸 레몬 청을 두른 갓 구운 크로와상 같은 상큼함)",
            price: 120000,
            imageUrl: "https://example.com/bleu-de-chanel.jpg",
          },
          {
            brand: "Dior",
            name: "Sauvage",
            description: "A spicy and aromatic fragrance.",
            price: 130000,
            imageUrl: "https://example.com/sauvage.jpg",
          },
          {
            brand: "Dior",
            name: "Sauvage",
            description: "A spicy and aromatic fragrance.",
            price: 130000,
            imageUrl: "https://example.com/sauvage.jpg",
          },
        ]}
      />
    </div>
  );
};

export default ResultContent;
