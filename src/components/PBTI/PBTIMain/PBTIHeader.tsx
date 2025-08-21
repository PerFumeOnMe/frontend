import PBTILOGO from '../../../assets/PBTI/PBTILOGO.gif';

const PBTIHeader : React.FC = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center z-1">
            <img src={PBTILOGO} className="w-[375px] h-[375px] -mt-22" />
            <div className='flex flex-col items-center -mt-26'>
                <div className="text-[28px] font-semibold text-grayscale-1000">
                    나의 향수 성향 알아보기
                </div>
                <div className="text-[16px] font-[400] text-grayscale-900">
                    성향으로 알아보는 향수 테스트
                </div>
            </div>
        </div>
    );
}

export default PBTIHeader