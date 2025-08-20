interface KeywordCharacterProps {
    characterImageUrl: string;
}

export default function KeywordCharacter({ characterImageUrl }: KeywordCharacterProps) {
    return (
        <div className="w-full px-[16px]">
            <div className="w-full rounded-[24px] bg-[#FBFBFB]/25 border-[1px] border-white px-[16px] py-[16px] text-center">
                <h3 className="text-title2 text-grayscale-1000 mb-[8px]">
                    감성 캐릭터
                </h3>
                <p className="text-title4 text-grayscale-900 mb-[8px]">
                    퍼퓨온미가 해석한 당신의 향기 감성은,<br/>마치 이런 사람 같아요.
                </p>
                <div className="flex justify-center">
                    <img
                        src={characterImageUrl}
                        alt="캐릭터 이미지"
                        className="w-[280px] h-[280px]"
                    />
                </div>
            </div>
        </div>
    );
} 