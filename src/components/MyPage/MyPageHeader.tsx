import SettingIcon from "../../assets/MyPage/SettingButton.svg"

const MyPageHeader = () => {
    
    return(
        <div className="flex py-1 justify-center">
            <div className="text-title3 text">마이페이지</div>
            <img src={SettingIcon} className="absolute right-5"/>
        </div>
    )
}

export default MyPageHeader;