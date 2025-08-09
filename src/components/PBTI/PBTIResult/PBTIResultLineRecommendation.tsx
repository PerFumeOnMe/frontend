interface LineRecommendation {
    LineRecommendation : string
}

const PBTIResultLineRecommendation : React.FC<LineRecommendation> = ({ LineRecommendation }) => {

  return(
  <div className="w-full flex flex-col justify-center items-center bg-[#FBFBFB] rounded-2xl p-5 shadow mb-6 text-center">
    <h2 className="text-title4 text-[18px] font-[600] mb-2">💬 두줄 소개</h2>
    <div className="flex flex-col justify-center items-center text-body3 text-grayscale-900 px-2">
      {LineRecommendation}
    </div>
  </div>
  )
}

export default PBTIResultLineRecommendation;