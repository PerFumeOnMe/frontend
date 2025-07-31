import type {
  RequestWorkshopDto,
  ResponseWorkshopDto,
} from "../types/apis/Workshop";
import { axiosInstance } from "./axios";

export const postWorkshopPreview = async (
  body: RequestWorkshopDto
): Promise<ResponseWorkshopDto> => {
  const response = await axiosInstance.post("/workshop/preview", body);

  return response.data;
};
