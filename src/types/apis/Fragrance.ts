import type { CommonResponse } from "../apis/common";
import type { Perfume } from "../perfume";

export type ResponseMdChoiceDto = {
    content: Perfume[];
    name: string;
    nickname: string;
}

export type MdChoiceResponse = CommonResponse<ResponseMdChoiceDto>;

export type TrendingResponse = CommonResponse<Perfume[]>;

export type FavoriteResponse = CommonResponse<{
    fragranceId: number;
}>;