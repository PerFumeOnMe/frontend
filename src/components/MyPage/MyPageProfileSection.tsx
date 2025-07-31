import type { ResponseUserInfoDto } from "../../types/apis/User";
import EditPreferredScentButton from "./EditPreferredScentButton";
import MyPageProfileImage from "./MyPageProfileImage";
import MyPageUserInfo from "./MyPageUserInfo";

type MyPageProfileSectionProps = {
    onClickSetting: () => void;
    userInfo: ResponseUserInfoDto | null;
};

const MyPageProfileSection = ({ onClickSetting, userInfo } : MyPageProfileSectionProps) => {
    if (!userInfo) return null; // 로딩 중 또는 데이터 없음 처리 로딩창 추가하기

    if (userInfo) {
        console.log(userInfo)
    }

    return(
        <div className="w-full flex flex-col justify-center items-center p-4 mt-4 bg-main-10">
            <MyPageProfileImage />
            <MyPageUserInfo />
            <EditPreferredScentButton onClickSetting={onClickSetting}/>
        </div>
    )
}

export default MyPageProfileSection;