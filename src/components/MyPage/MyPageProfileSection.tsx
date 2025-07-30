import EditPreferredScentButton from "./EditPreferredScentButton";
import MyPageProfileImage from "./MyPageProfileImage";
import MyPageUserInfo from "./MyPageUserInfo";

type MyPageHeaderProps = {
    onClickSetting: () => void;
};

const MyPageProfileSection = ({ onClickSetting } : MyPageHeaderProps) => {
    
    return(
        <div className="w-full flex flex-col justify-center items-center p-4 mt-4 bg-main-10">
            <MyPageProfileImage />
            <MyPageUserInfo />
            <EditPreferredScentButton onClickSetting={onClickSetting}/>
        </div>
    )
}

export default MyPageProfileSection;