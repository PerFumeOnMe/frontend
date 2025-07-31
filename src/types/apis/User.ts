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

// 선호 향 수정
export type RequestUserNotesDto = {
  noteCategoryId : number[];
}

export type ResponseUserNotesDto = CommonResponse<object>

// 프로필 사진 변경
export type RequestUserProfileImageDto = {
  imageUrl : string
}

export type ResponseUserProfileImageDto = CommonResponse<object>

// 유저 정보 조회
export type ResponseUserInfoDto = CommonResponse<{
  nickNmae : string,
  imageUrl : string,
  preferredNotes : string[]
}>

// 회원탈퇴 API
//export type Response

// 즐겨찾기 목록 조회 API
export type RequestUserFavoritesListDto = {
  page : number,
  size : number,
}

export type ResponseUserFavoritesListDto = CommonResponse<{
  content : UserFavoriteContentDto[],
  hasNext : boolean
}>

export type UserFavoriteContentDto = {
  id: number,
  brand: string,
  name: string,
  minPrice: number,
  imageUrl: string,
  liked: true
}