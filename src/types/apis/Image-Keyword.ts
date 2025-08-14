import type { CommonResponse } from "./common"

export type ImageKeywordListResponseDTO = CommonResponse<ImageKeywordResult[]>

export type ImageKeywordResult = {
    imageKeywordId : number
    savedName : string
    createdAt : string
}