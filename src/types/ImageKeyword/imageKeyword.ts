import type { CommonResponseCode, ImageKeywordErrorCode } from './imageKeyword.type';

// 키워드 입력 폼
export interface ImageKeywordRequest {
    ambience: string;
    style: string;
    gender: string;
    season: string;
    character: string;
}

// 프리뷰 향수 추천 카드
export interface ImageKeywordRecommendation {
    brand: string;
    name: string;
    topNote: string;
    middleNote: string;
    baseNote: string;
    description: string;
    relatedKeywords: string[];
}

// 프리뷰 결과 응답
export interface ImageKeywordPreviewResult {
    keywords: string[];
    descriptions: string;
    scenario: string;
    characterImageUrl: string;
    recommendations: ImageKeywordRecommendation[];
}

// API 성공 응답
export interface ApiSuccessResponse<T> {
    isSuccess: true;
    code: CommonResponseCode;
    message: string;
    result: T;
}

// API 에러 응답
export interface ApiErrorResponse {
    resultType: "FAIL";
    error: {
        errorCode: ImageKeywordErrorCode;
        reason: string;
        data: Record<string, any>;
    };
    success: null;
}

// 저장 요청
export interface ImageKeywordSaveRequest {
    savedName: string;
}

// 저장 응답 결과
export interface ImageKeywordSaveResult {
    imageKeywordId: number;
    savedName: string;
    createdAt: string;
}

// API 응답 타입
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
