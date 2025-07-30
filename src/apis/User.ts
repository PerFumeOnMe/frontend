import {
    type RequestSigninDto,
    type RequestSignupDto,
    type ResponseSignupDto,
    type ResponseSigninDto,
    type SigninResponseWithToken,
} from "../types/apis/User";
import { axiosInstance } from "./axios";

/// 로그인 
export const postSignin = async ( body : RequestSigninDto ):Promise<SigninResponseWithToken> => {
    const res = await axiosInstance.post("/auth/login",body,);
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