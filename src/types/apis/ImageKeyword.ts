import type { ImageKeyword, ImageKeywordResult } from "../ImageKeyword/imageKeyword";
import type { CommonResponse } from "./common";

export type ImageKeywordPreviewRequestDto = ImageKeyword;

export type ImageKeywordPreviewResponseDto = CommonResponse<ImageKeywordResult>

export type ErrorResult = {
    keyword?: string;
} 