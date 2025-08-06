import SkeletonMyPageProfileImage from "./SkeletonMyPageProfileImage";
import SkeletonMyPageUserInfo from "./SkeletonMyPageUserInfo";
import MyPageUserInfo from "./MyPageUserInfo";
import MyPageProfileImage from "./MyPageProfileImage";
import EditPreferredScentButton from "./EditPreferredScentButton";
import type { ResponseUserInfo, ResponseUserInfoDto } from "../../types/apis/User";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../apis/User";

type MyPageProfileSectionProps = {
    onClickSetting: () => void;
};

const MyPageProfileSection = ({ onClickSetting }: MyPageProfileSectionProps) => {
    const [userInfo, setUserInfo] = useState<ResponseUserInfo | undefined>(undefined);
    const [userProfileImageURL, setUserProfileImageURL] = useState<string | undefined>(undefined);
    const [userNickName, setUserNickName] = useState<string | undefined>(undefined)
    const [userPrefferedScant, setUserPrefferedScant] = useState<string[] | undefined>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const data = await getUserInfo();
                setUserInfo(data);
                setUserNickName(data.nickName)
                setUserProfileImageURL(data.imageUrl)
                setUserPrefferedScant(data.preferredNotes)

            } catch (error) {
                console.error("유저 정보 조회 실패", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserInfo();
    }, []);
    
    const isLoadingData = isLoading;

    return (
        <div className="w-full flex flex-col justify-center items-center p-4 mt-4 bg-main-10">
            {isLoadingData ? (
                <>
                    <SkeletonMyPageProfileImage />
                    <SkeletonMyPageUserInfo />
                    <EditPreferredScentButton onClickSetting={onClickSetting} />
                </>
            ) : (
                <>
                    <MyPageProfileImage profileURL={userProfileImageURL} />
                    <MyPageUserInfo UserNickName={userNickName} UserPrefferedScant={userPrefferedScant} />
                    <EditPreferredScentButton onClickSetting={onClickSetting} />
                </>
            )}
        </div>
    );
};

export default MyPageProfileSection;