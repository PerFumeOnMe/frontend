// types/apis/PBTI.ts

import type { CommonResponse } from "./common";

// PBTI 결과 저장
export type RequestPbtiSave = {
  savedName: string;
}

export type ResponsePbtiSave = {
  id: number;
  savedName: string;
  createdAt: string;
}

// PBTI 결과 조회
export type RequestPbtiQuestion = {
  qOne: string;
  qTwo: string;
  qThree: string;
  qFour: string;
  qFive: string;
  qSix: string;
  qSeven: string;
  qEight: string;
}

export type ResponsePbtiResultDetail = {
  savedName: string;
  recommendation: string;
  keywords: KeywordDto[];
  perfumeStyle: PerfumeStyleDto;
  scentPoint: ScentPointDto[];
  summary: string;
  perfumeRecommend: PerfumeRecommendDto[];
}

export type KeywordDto = {
  keyword: string;
  keywordDescription: string;
}

export type NoteDto = {
  category: string;
  categoryDescription: string;
}

export type PerfumeStyleDto = {
  description: string;
  notes: NoteDto[];
}

export type ScentPointDto = {
  category: string;
  point: number;
}

export type PerfumeRecommendDto = {
  name: string;
  brand: string;
  description: string;
  perfumeImageUrl: string;
}

export type ResponsePbtiQuestion = {
  recommendation: string;
  keywords: KeywordDto[];
  perfumeStyle: PerfumeStyleDto;
  scentPoint: ScentPointDto[];
  summary: string;
  perfumeRecommend: PerfumeRecommendDto[];
}

// 마이페이지 PBTI 결과 상세 조회
export type RequestPbtiDetail = {
  pbtiId: number;
}

// export type ResponsePbtiResultDetail 같은 response 사용

// PBTI 결과 이름 수정
export type RequestUpdatePbtiName = {
  savedName: string;
}

export type ResponseUpdatePbtiName = {
  id: number;
  savedName: string;
}

// Response DTOs
export type PbtiListResult = {
  id: number;
  savedName: string;
  createdAt: string;
}

// API Response Wrappers using CommonResponse
export type ApiResponsePbtiSaveResponse = CommonResponse<ResponsePbtiSave>;

export type ApiResponsePbtiQuestionResponse = CommonResponse<ResponsePbtiQuestion>;

export type ApiResponsePbtiResultDetailResponse = CommonResponse<ResponsePbtiResultDetail>;

export type ApiResponseUpdatePbtiNameResponse = CommonResponse<ResponseUpdatePbtiName>;

export type ApiResponseVoid = CommonResponse<object>;

export type ApiResponsePbtiListResult = CommonResponse<PbtiListResult[]>;