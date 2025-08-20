import type { ImageKeyword, ImageKeywordDetailRequest, ImageKeywordDetailResult, ImageKeywordResult, SaveImageKeywordRequest, SaveImageKeywordResult } from "../ImageKeyword/imageKeyword";
import type { CommonResponse } from "./common";

// 이미지 키워드 미리보기
export type ImageKeywordPreviewRequestDto = ImageKeyword;
export type ImageKeywordPreviewResponseDto = CommonResponse<ImageKeywordResult>

export type ErrorResult = {
    keyword?: string;
} 

// 이미지 키워드 저장
export type ImageKeywordSaveRequestDto = SaveImageKeywordRequest
export type ImageKeywordSaveResponseDto = CommonResponse<SaveImageKeywordResult>

// 이미지 키워드 상세 조회
export type ImageKeywordDetailResponseDto = CommonResponse<ImageKeywordDetailResult>
export type ImageKeywordDetailRequestDto = ImageKeywordDetailRequest