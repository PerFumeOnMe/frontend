import EditPreferredScentButton from "./EditPreferredScentButton";
import MyPageProfileImage from "./MyPageProfileImage";
import MyPageUserInfo from "./MyPageUserInfo";

const MyPageProfileSection = () => {
    
    return(
        <div className="w-full flex flex-col justify-center items-center p-4 mt-4 bg-main-10">
            <MyPageProfileImage />
            <MyPageUserInfo />
            <EditPreferredScentButton/>
        </div>
    )
}

export default MyPageProfileSection;