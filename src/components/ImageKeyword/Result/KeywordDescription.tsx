interface KeywordDescriptionProps {
    descriptions: string;
}

const formatText = (text: string) => {
    return text.split('.')
        .map(sentence => sentence.trim())
        .filter(Boolean)
        .join('.\n') + '.';
};

export default function KeywordDescription({ descriptions }: KeywordDescriptionProps) {
    return (
        <div className="w-full px-[16px]">
            <div className="w-full rounded-[24px] bg-[#FBFBFB]/25 border-[1px] border-white px-[16px] py-[16px] text-center">
                <h3 className="text-title2 text-grayscale-1000 mb-[8px]">
                    키워드 기반 해석
                </h3>
                <p className="text-title4 text-grayscale-900 mb-[8px]">
                    퍼퓸온미가 해석한 당신의 감성은 이런 느낌이에요
                </p>
                <p className="text-body3 text-grayscale-900 whitespace-pre-line break-keep">
                    {formatText(descriptions)}
                </p>
            </div>
        </div>
    );
} 