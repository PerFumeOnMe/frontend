import loading from '../../assets/ImageKeyword/loading.png';

export default function ImageKeywordLoading() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
                <img 
                    src= {loading} 
                    alt="로딩 이미지"
                    className="w-[295px] h-[240px]"
                />
                <p className="text-title2 text-grayscale-1000">
                    김성섭님의 이미지를 파악중이에요
                </p>
        </div>
    );
} 