type MyPageHeaderProps = {
    onClickSetting: () => void;
};

const EditPreferredScentButton = ({ onClickSetting } : MyPageHeaderProps) => {
    
    return(
        <button className="mt-4 cursor-pointer" onClick={onClickSetting}>
            <div className="px-3 py-2 border-[0.8px] border-grayscale-800 rounded-2xl text-body4 text-grayscale-800 tracking-tighter">선호하는 향 수정</div>
        </button>
    )
}

export default EditPreferredScentButton;