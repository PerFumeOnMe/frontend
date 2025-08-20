import type {
  RequestWorkshopDto,
  RequestWorkshopSaveDto,
  ResponseWorkshopDto,
  WorkShopListResponseDTO,
  WorkShopMyPerfume,
  ResponseWorkshopSaveDto,
  WorkshopSaveDto,
} from "../types/apis/Workshop";
import { axiosInstance } from "./axios";

export const postWorkshopPreview = async (
  body: RequestWorkshopDto
): Promise<ResponseWorkshopDto> => {
  const response = await axiosInstance.post("/workshop/preview", body);

  return response.data;
};

export const getWorkShopMyPerfumeList = async () : Promise<WorkShopMyPerfume[] | []> => {
    try {
        const res = await axiosInstance.get<WorkShopListResponseDTO>("/fragrances/my-perfume")
        const data = res.data.result

        return data;
        
    } catch (error){
        alert("나만의 향수를 조회하는 과정에서 오류가 발생했습니다.")
        throw error
    }
}
export const postWorkshopSave = async (
  body: RequestWorkshopSaveDto
): Promise<ResponseWorkshopSaveDto> => {
  const response = await axiosInstance.post("/workshop/save", body);

  return response.data;
};

export const getMyPageWorkShopList = async () : Promise<WorkshopSaveDto[] | []> => {
    try {
        const res = await axiosInstance.get<ResponseWorkshopSaveDto>("/workshop/result/list")
        const data = res.data.result

        return data;
        
    } catch (error){
        alert("나만의 향수를 조회하는 과정에서 오류가 발생했습니다.")
        throw error
    }
}
