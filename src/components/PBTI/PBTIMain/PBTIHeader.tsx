import character from "../../../assets/PBTI/character.png"

const PBTIHeader : React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-30">
            <div className="text-[28px] font-semibold text-grayscale-1000">
                나의 향수 성향 알아보기
            </div>
            <div className="text-[16px] font-[400] text-grayscale-900">
                성향으로 알아보는 향수 테스트
            </div>
        </div>
    );
}

export default PBTIHeader