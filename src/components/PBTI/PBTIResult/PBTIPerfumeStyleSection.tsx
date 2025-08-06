import PBTIPerfumeStyle from "./PBTIPerfumeStyle";

const scentData = {
  summary: "선명하고 또렷한 인상을 남기는 향기",
  details: [
    { note: "시트러스 계열", description: "상쾌하고 활기찬 에너지" },
    { note: "진저&민트 노트", description: "프레시하고 또렷한 존재감" },
    { note: "클래식 탑 - 미들 - 베이스 구조", description: "계획된 밸런스로 조화" },
    { note: "레더·시더우드", description: "정돈된 세련미와 자신감" },
    { note: "앰버·스파이시", description: "깊이 있는 고급스러운 마무리" }
  ]
};

interface perfumeRecommendation {
  category : string;
  categoryDescription : string
}
interface perfumeStyle {
  description: string
  notes : perfumeRecommendation[]
}

const PBTIPerfumeStyleSection:React.FC<perfumeStyle> = ({ description, notes }) => {
  console.log("향수 스타일 데이터", description)

  return (
  <div className="w-full flex flex-col justify-center items-center bg-[#FBFBFB] rounded-2xl p-5 shadow mb-6">
    <h2 className="text-title3 font-semibold mb-1.5">🌸 당신에게 어울리는 향기 스타일</h2>
    <div className="text-body2 text-grayscael-900 text-center mb-1.5">"{description}"</div>
    <div className="flex flex-col justify-center items-center gap-2 w-full">
      {notes.map((item, index) => (
        <PBTIPerfumeStyle key={index} note={item.category} description={item.categoryDescription} />
      ))}
    </div>
  </div>
  )
};

export default PBTIPerfumeStyleSection;
