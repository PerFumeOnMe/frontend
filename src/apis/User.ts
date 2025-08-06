import {
    type RequestSigninDto,
    type RequestSignupDto,
    type ResponseSignupDto,
    type ResponseSigninDto,
    type SigninResponseWithToken,
    type RequestUserNotesDto,
    type ResponseUserNotesDto,
    type RequestUserProfileImageDto,
    type ResponseUserProfileImageDto,
    type ResponseUserInfoDto,
    type RequestUserFavoritesListDto,
    type ResponseUserFavoritesListDto,
    type UserFavoriteContentDto,
    type ResponseUserInfo,
} from "../types/apis/User";
import { axiosInstance } from "./axios";

/// 로그인 
export const postSignin = async ( body : RequestSigninDto ):Promise<SigninResponseWithToken> => {
    const res = await axiosInstance.post("/auth/login", body);
    const data = res.data.result
    const accessToken = res.headers['authorization']?.split(" ")[1]
    
    return {
        accessToken,
        data
    };
};

/// 로그 아웃
export const postLogout = async () => {
    const { data } = await axiosInstance.post("/users/logout");

    return data;
}

/// 회원가입
export const postSignup = async ( body : RequestSignupDto ):Promise<ResponseSignupDto> => {
    const { data } = await axiosInstance.post(
        '/users/signup',
        body,
    );

    return data;
};

// 유저 선호 향 수정 API
export const patchUserNotes = async ( body : RequestUserNotesDto ):Promise<ResponseUserNotesDto> => {
    const { data } = await axiosInstance.patch(
        '/users/me/notes',
        body,
    );

    return data;
};

// 프로필 사진 변경 API
export const patchUserProfileImage = async ( body : RequestUserProfileImageDto ):Promise<ResponseUserProfileImageDto> => {
    const { data } = await axiosInstance.patch(
        '/users/me/image',
        body,
    );

    return data;
};

// 프로필 조회 API
export const getUserInfo = async ():Promise<ResponseUserInfo> => {
    const res = await axiosInstance.get<ResponseUserInfoDto>(
        '/users/me'
    )

    const data = res.data.result

    return data
}

// 회원탈퇴 API
export const deleteUserAccount = async () => {
    const { data } = await axiosInstance.delete(
        '/users/me'
    )

    return data
}

// 즐겨찾기 목록 조회 API
export const getFavoritesList = async ( body : RequestUserFavoritesListDto ):Promise<ResponseUserFavoritesListDto> => {
    try {
        const res = await axiosInstance.get<ResponseUserFavoritesListDto>(
            '/users/favorites', {
                params : body
            }
        )
        return res.data
    } catch (error) {
        console.log("즐겨찾기 목록을 조회하는 과정에서 오류가 발생했습니다.", error)
        throw error
    }
}