import character from "../../assets/PBTI/character.png"

const PBTIHeader : React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-30">
            <div className="text-[32px] font-[700] text-main-500">
                나의 향수 성향은?
            </div>
            <div className="text-[14px] font-[500] text-main-500">
                성향으로 알아보는 향수 테스트
            </div>
            <img src={character} className="my-12 w-[157px] h-[157px]" />
        </div>
    );
}

export default PBTIHeader