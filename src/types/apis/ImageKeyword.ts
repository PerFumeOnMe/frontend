import type { ImageKeyword, ImageKeywordResult, SaveImageKeywordRequest, SaveImageKeywordResult } from "../ImageKeyword/imageKeyword";
import type { CommonResponse } from "./common";

export type ImageKeywordPreviewRequestDto = ImageKeyword;

export type ImageKeywordPreviewResponseDto = CommonResponse<ImageKeywordResult>

export type ErrorResult = {
    keyword?: string;
} 

export type ImageKeywordSaveRequestDto = SaveImageKeywordRequest

export type ImageKeywordSaveResponseDto = CommonResponse<SaveImageKeywordResult>