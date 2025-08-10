import type { ImageKeywordListResponseDTO, ImageKeywordResult } from "../types/apis/Image-Keyword";
import { axiosInstance } from "./axios"

export const getImageKeywordMyPerfumeList = async (): Promise<ImageKeywordResult[]> => {
    try{
        const res = await axiosInstance.get<ImageKeywordListResponseDTO>("/image-keyword/result/list");
        const data = res.data.result

        return data;

    } catch (error){
        alert("이미지 키워드 결과를 불러오는 중 문제가 발생했습니다.")
        throw error
    }
}