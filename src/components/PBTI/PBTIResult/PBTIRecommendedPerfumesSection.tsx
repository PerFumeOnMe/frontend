const PBTIRecommendedPerfumesSection = () => (
  <div className="w-full flex flex-col bg-white rounded-2xl p-5 shadow mb-6">
    <h2 className="text-title4 font-bold mb-4">이런 향수가 잘 어울려요</h2>
    <div className="space-y-4">
      {[1, 2, 3].map((id) => (
        <div key={id} className="flex items-center space-x-4 border-b pb-3">
          <div className="w-16 h-16 bg-gray-200 rounded-md" /> {/* 이미지 자리 */}
          <div className="flex-1">
            <div className="font-bold">제품명</div>
            <div className="text-body4 text-gray-600">
              다채로운 시트러스가 첫인상을 선명하게 채우는 이탈리안 클래식 향.
            </div>
            <div className="text-sm text-purple-600 font-semibold mt-1">
              320,000원~
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PBTIRecommendedPerfumesSection;
