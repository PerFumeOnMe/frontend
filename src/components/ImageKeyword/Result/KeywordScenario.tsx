interface KeywordScenarioProps {
    scenario: string;
}

const formatText = (text: string) => {
    return text.split('.')
        .map(sentence => sentence.trim())
        .filter(Boolean)
        .join('.\n') + '.';
};

export default function KeywordScenario({ scenario }: KeywordScenarioProps) {
    return (
        <div className="w-full px-[16px]">
            <div className="w-full rounded-[24px] bg-[#FBFBFB]/25 border-[1px] border-white px-[16px] py-[16px] text-center">
                <h3 className="text-title2 text-grayscale-1000 mb-[8px]">
                    감성 시나리오
                </h3>
                <p className="text-title4 text-grayscale-900 mb-[8px]">
                    이 향수를 떠올릴 때, 퍼퓨온미는 이렇게 상상했어요
                </p>
                <p className="text-body3 text-grayscale-900 whitespace-pre-line break-keep">
                    {formatText(scenario)}
                </p>
            </div>
        </div>
    );
} 