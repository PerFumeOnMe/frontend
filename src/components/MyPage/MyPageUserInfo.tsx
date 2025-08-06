interface MyPageUserInfoProps {
    UserNickName : string | undefined
    UserPrefferedScant : string[] | undefined
}

const MyPageUserInfo = ( { UserNickName, UserPrefferedScant } : MyPageUserInfoProps) => {
    
    return(
        <div className="flex flex-col justify-center items-center mt-4">
            <div className="text-title3 text-grayscale-1000">{UserNickName ? UserNickName : "!닉네임이 존재하지 않습니다!"}</div>
            <div className="text-body2 text-grayscale-900">{UserPrefferedScant ? UserPrefferedScant.join(", ") : "선호향이 없어용"}</div>
        </div>
    )
}

export default MyPageUserInfo;