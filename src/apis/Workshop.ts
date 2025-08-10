import type {
  RequestWorkshopDto,
  RequestWorkshopSaveDto,
  ResponseWorkshopDto,
  ResponseWorkshopSaveDto,
} from "../types/apis/Workshop";
import { axiosInstance } from "./axios";

export const postWorkshopPreview = async (
  body: RequestWorkshopDto
): Promise<ResponseWorkshopDto> => {
  const response = await axiosInstance.post("/workshop/preview", body);

  return response.data;
};

export const postWorkshopSave = async (
  body: RequestWorkshopSaveDto
): Promise<ResponseWorkshopSaveDto> => {
  const response = await axiosInstance.post("/workshop/save", body);

  return response.data;
};
