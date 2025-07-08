// 해당 페이지 api 연경 후 전면 수정 예정

import { useNavigate } from "react-router-dom";

const LabResultPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[480px] min-h-screen bg-white px-9 py-6 flex flex-col">
      {/* 헤더 */}
      <h1 className="text-2xl font-bold text-black text-center mb-8">
        🌿 당신의 향기 해석 결과
      </h1>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 space-y-16">
        {/* 시각적 키워드 요약 */}
        <section className="text-center">
          <h2 className="text-base font-normal text-black mb-4">
            🖼 시각적 키워드 요약
          </h2>
          <p className="text-base text-black leading-relaxed">
            #상큼한첫인상 #감성적중심
            <br />
            #우디잔향 #깊이있는사람 #신뢰감있는향기
          </p>
        </section>

        {/* 향기 분석 섹션들 */}
        <div className="space-y-12">
          <section className="text-center">
            <h3 className="text-base font-normal text-black mb-3">
              🪄 향기의 첫인상
            </h3>
            <p className="text-base text-black leading-relaxed">
              상큼한 시트러스가 먼저 퍼지며,
              <br />
              활기차고 개방적인 에너지를 전달합니다.
              <br />
              마치 첫 만남에서 웃으며 인사하는 당신의 모습처럼,
              <br />
              누구에게나 긍정적인 첫인상을 남깁니다.
            </p>
          </section>

          <section className="text-center">
            <h3 className="text-base font-normal text-black mb-3">
              🌸 중심을 잡는 향
            </h3>
            <p className="text-base text-black leading-relaxed">
              곧이어 재스민의 은은한 꽃향기가 중심을 잡습니다.
              <br />
              부드럽고 감성적인 분위기를 더하며,
              <br />
              당신의 내면에 깃든 섬세함과 따뜻함을 보여줍니다.
            </p>
          </section>

          <section className="text-center">
            <h3 className="text-base font-normal text-black mb-3">
              🌲 마지막에 남는 잔향
            </h3>
            <p className="text-base text-black leading-relaxed">
              이 향기의 핵심은 단연 우디 노트입니다.
              <br />
              진한 나무 향은 안정감, 진중함, 신뢰감을 상징하며
              <br />
              당신이 속이 깊고 조용한 울림이 있는 사람임을 암시합니다.
            </p>
          </section>
        </div>

        {/* 성향 분석 */}
        <section className="text-center">
          <h2 className="text-base font-normal text-black mb-4">
            🧠 향기로 해석한 당신의 성향
          </h2>
          <div className="space-y-4">
            <p className="text-base text-black leading-relaxed">
              🌞 겉으로는 밝고 유쾌하며 누구든 쉽게 다가갈 수 있는 사람
              <br />
              🌿 하지만 곧 섬세하고 부드러운 내면이 드러나고
              <br />
              🪵 마지막엔 단단하고 흔들림 없는 중심이 느껴집니다.
            </p>
            <p className="text-base text-black leading-relaxed">
              당신은 사람들에게
              <br />
              "기분 좋은 여운이 오래 남는 사람"
              <br />
              으로 기억됩니다.
            </p>
          </div>
        </section>

        {/* 향수 추천 섹션 */}
        <section>
          <h2 className="text-base font-normal text-black mb-4">
            🎁 당신에게 어울리는 향수 추천
          </h2>
          <div className="flex flex-col w-[371px] items-start gap-[30px] relative">
            <div className="items-center gap-[13px] self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="relative w-[143px] h-[157px]">
                <div className="h-[157px]">
                  <div className="relative w-[143px] h-[157px] bg-[#fffdfd] rounded-[5px] border border-solid border-[#0000001a]">
                    <img
                      className="absolute w-[115px] h-[137px] top-[13px] left-[18px]"
                      alt="Rectangle"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col w-[215px] items-start gap-3.5 flex relative">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#292b2b] text-sm tracking-[0] leading-6">
                  딥티크
                </div>

                <div className="relative self-stretch [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#292b2b] text-base tracking-[0] leading-[19.2px]">
                  탐 다오
                </div>

                <p className="relative w-fit [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#5a5a5a] text-xs tracking-[0] leading-[18px]">
                  부드럽고 고요한 우디 계열의 대표 향수
                  <br /> 명상처럼 잔잔하고 진중한 잔향이 특징
                </p>
              </div>
            </div>

            <div className="items-center gap-[13px] self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="relative w-[143px] h-[157px]">
                <div className="h-[157px]">
                  <div className="relative w-[143px] h-[157px] bg-[#fffdfd] rounded-[5px] border border-solid border-[#0000001a]">
                    <img
                      className="absolute w-[115px] h-[137px] top-[13px] left-[18px]"
                      alt="Rectangle"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col w-[215px] items-start gap-3.5 flex relative">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#292b2b] text-sm tracking-[0] leading-6">
                  딥티크
                </div>

                <div className="relative self-stretch [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#292b2b] text-base tracking-[0] leading-[19.2px]">
                  탐 다오
                </div>

                <p className="relative w-fit [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#5a5a5a] text-xs tracking-[0] leading-[18px]">
                  부드럽고 고요한 우디 계열의 대표 향수
                  <br /> 명상처럼 잔잔하고 진중한 잔향이 특징
                </p>
              </div>
            </div>

            <div className="items-center gap-[13px] self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="relative w-[143px] h-[157px]">
                <div className="h-[157px]">
                  <div className="relative w-[143px] h-[157px] bg-[#fffdfd] rounded-[5px] border border-solid border-[#0000001a]">
                    <img
                      className="absolute w-[115px] h-[137px] top-[13px] left-[18px]"
                      alt="Rectangle"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col w-[215px] items-start gap-3.5 flex relative">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#292b2b] text-sm tracking-[0] leading-6">
                  딥티크
                </div>

                <div className="relative self-stretch [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#292b2b] text-base tracking-[0] leading-[19.2px]">
                  탐 다오
                </div>

                <p className="relative w-fit [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#5a5a5a] text-xs tracking-[0] leading-[18px]">
                  부드럽고 고요한 우디 계열의 대표 향수
                  <br /> 명상처럼 잔잔하고 진중한 잔향이 특징
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 하단 버튼들 */}
      <div className="flex gap-4 mt-8">
        <button className="flex-1 bg-gray-600 text-white text-xl font-medium py-3 rounded-md hover:bg-gray-700 transition-colors">
          저장하기
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex-1 bg-gray-800 text-white text-xl font-medium py-3 rounded-md hover:bg-gray-900 transition-colors"
        >
          홈으로
        </button>
      </div>
    </div>
  );
};

export default LabResultPage;
