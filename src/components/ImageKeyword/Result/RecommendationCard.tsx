interface Note {
    topNote: string;
    middleNote: string;
    baseNote: string;
}

interface RecommendationCardProps {
    brand: string;
    name: string;
    notes: Note;
    description: string;
    imageUrl: string;
    relatedKeywords: string[];
}

export default function RecommendationCard({
    brand,
    name,
    notes,
    description,
    imageUrl,
    relatedKeywords
}: RecommendationCardProps) {
    return (
        <div className="w-full">
            <div className="flex gap-[12px]">
                <img 
                    src={imageUrl} 
                    alt={name}
                    className="w-[120px] h-[140px] object-cover rounded-[8px]"
                />
                <div className="flex-1">
                    <p className="text-caption1 text-grayscale-800">{brand}</p>
                    <p className="text-title4 text-grayscale-1000 mt-[4px]">{name}</p>
                    <div className="mt-[8px] space-y-[4px]">
                        <div className="flex items-center gap-[8px]">
                            <span className="text-body4 text-grayscale-1000">탑 노트</span>
                            <span className="text-caption1 text-grayscale-800">{notes.topNote}</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <span className="text-body4 text-grayscale-1000">미들 노트</span>
                            <span className="text-caption1 text-grayscale-800">{notes.middleNote}</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <span className="text-body4 text-grayscale-1000">베이스 노트</span>
                            <span className="text-caption1 text-grayscale-800">{notes.baseNote}</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-body3 text-grayscale-900 text-center mt-[16px]">
                "{description}"
            </p>
            <div className="flex gap-[8px] mt-[8px] justify-center">
                {relatedKeywords.map((keyword, index) => (
                    <div key={index} className="flex items-center gap-[4px]">
                        <span className="text-body3 text-grayscale-800">
                            {keyword}
                        </span>
                        {/* <div className="flex">
                            {Array.from({ length: 2 }).map((_, i) => (
                                <span key={i} className="text-primary text-grayscale-800">♥</span>
                            ))}
                        </div> */}
                        {index < relatedKeywords.length - 1 && (
                            <span className="text-body3 text-grayscale-800">|</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
