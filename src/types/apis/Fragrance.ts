import type { CommonResponse } from "../apis/common";
import type { Perfume, PerfumeDetail } from "../perfume";

export type ResponseMdChoiceDto = {
  content: Perfume[];
  name: string;
  nickname: string;
};

export type MdChoiceResponse = CommonResponse<ResponseMdChoiceDto>;

export type TrendingResponse = CommonResponse<Perfume[]>;

export type FavoriteResponse = CommonResponse<{
  fragranceId: number;
}>;

export type ResponseFragranceDetailDto = CommonResponse<PerfumeDetail>;

// 모든 향수 조회 응답 타입
export type PerfumeResponseDto = CommonResponse<{
  content: Perfume[];
  hasNext: boolean;
}>

// 모든 향수 조회 요청 파라미터 타입
export type PerfumeRequestDto = {
    page: number;
    size: number;
}

export type MyPerfume = {
  brand: string;
  name: string;
  imageUrl: string;
}

export type MyPerfumeResponseDto = CommonResponse<{
  exists: boolean;
  myPerfumeList: MyPerfume[];
}>

export type SearchRequestDto = {
  keyword: string;
  page: number;
  size: number;
}

export type SearchResponseDto = CommonResponse<{
  content: Perfume[];
  hasNext: boolean;
}>