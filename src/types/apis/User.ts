import type { CommonResponse } from "./common";

// 로그인 
export type RequestSigninDto = {
  loginId : string;
  password : string;
}

export type ResponseSigninDto = CommonResponse<{
  refreshToken: string,
  userId: number,
  social: string
}>

export type SigninResponseWithToken = ResponseSigninDto & { accessToken: string };

// 회원가입
export type RequestSignupDto = {
  name : string,
  loginId : string,
  password : string,
}

export type ResponseSignupDto = CommonResponse<{
  userId : number
}>