import EditPreferredScentButton from "./EditPreferredScentButton";
import MyPageProfileImage from "./MyPageProfileImage";
import MyPageUserInfo from "./MyPageUserInfo";

const MyPageProfileSection = () => {
    
    return(
        <div className="w-full flex flex-col justify-center items-center mt-4">
            <MyPageProfileImage />
            <MyPageUserInfo />
            <EditPreferredScentButton/>
        </div>
    )
}

export default MyPageProfileSection;