interface KeywordBubblesProps {
    keywords: string[];
}

export default function KeywordBubbles({ keywords }: KeywordBubblesProps) {
    const bubblePositions = [
        { size: 80, left: 10, top: 10, rotate: -15 },          // 분위기
        { size: 80, right: 10, top: 5, rotate: 20 },          // 스타일
        { size: 80, right: 12, bottom: 5, rotate: 8 },      // 성별
        { size: 80, left: '50%', top: '50%', rotate: 0 },     // 계절
        { size: 80, left: 30, bottom: 8, rotate: -8 },        // 성격
        // 작은 장식용 버블
        { size: 28, left: 110, top: 25},
        { size: 28, left: 38, top: 108},
        { size: 28, right: 60, bottom: 98},
        { size: 28, right: 105, bottom: 35}
    ];

    return (
        <div className="relative w-[282.87px] h-[240.94px]">
            {bubblePositions.map((position, index) => {
                const isKeywordBubble = index < 5; // 첫 5개는 키워드 버블
                const { rotate, size, ...positionStyle } = position;
                
                const transform = position.left === '50%'
                    ? 'translate(-50%, -50%)' + (isKeywordBubble && rotate ? ` rotate(${rotate}deg)` : '')
                    : isKeywordBubble && rotate ? `rotate(${rotate}deg)` : undefined;

                const style: React.CSSProperties = {
                    width: size,
                    height: size,
                    ...positionStyle,
                    position: 'absolute',
                    transform
                };

                return (
                    <div
                        key={index}
                        className={`
                            rounded-full border-[1px] border-[#FBFBFB]/40 bg-[#FBFBFB]/30 flex items-center justify-center
                            ${isKeywordBubble ? 'text-title4 text-grayscale-1000' : ''}
                        `}
                        style={style}
                    >
                        {isKeywordBubble && keywords[index]}
                    </div>
                );
            })}
        </div>
    );
} 