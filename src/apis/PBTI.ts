// apis/pbti.ts
import {
  type RequestPbtiSave,
  type RequestPbtiQuestion,
  type RequestPbtiDetail,
  type RequestUpdatePbtiName,
  type ResponsePbtiSave,
  type ResponsePbtiQuestion,
  type ResponsePbtiResultDetail,
  type ResponseUpdatePbtiName,
  type PbtiListResult,
  type ApiResponsePbtiSaveResponse,
  type ApiResponsePbtiQuestionResponse,
  type ApiResponsePbtiResultDetailResponse,
  type ApiResponseUpdatePbtiNameResponse,
  type ApiResponseVoid,
  type ApiResponsePbtiListResult,
} from "../types/apis/PBTI";
import { axiosInstance } from "./axios";

/// PBTI 결과 조회 (8개 질문 기반)
export const postPBTIResult = async (
  body: RequestPbtiQuestion
): Promise<ResponsePbtiQuestion> => {
  const { data }: { data: ApiResponsePbtiQuestionResponse } = 
    await axiosInstance.post("/pbti/result", body);
  return data.result;
};

/// PBTI 결과 저장
export const postSavePBTI = async (
  body: RequestPbtiSave
): Promise<ResponsePbtiSave> => {
  const { data }: { data: ApiResponsePbtiSaveResponse } = 
    await axiosInstance.post("/pbti/save", body);
  return data.result;
};

/// 마이페이지 PBTI 결과 상세 조회
export const postPBTIDetailResult = async (
  body: RequestPbtiDetail
): Promise<ResponsePbtiResultDetail> => {
  const { data }: { data: ApiResponsePbtiResultDetailResponse } = 
    await axiosInstance.post("/pbti/detailResult", body);
  return data.result;
};

/// PBTI 결과 이름 수정
export const patchPBTIName = async (
  pbtiId: number,
  body: RequestUpdatePbtiName
): Promise<ResponseUpdatePbtiName> => {
  const { data }: { data: ApiResponseUpdatePbtiNameResponse } = 
    await axiosInstance.patch(`/pbti/${pbtiId}/name`, body);
  return data.result;
};

/// 마이페이지 PBTI 목록 조회
export const getPBTIList = async (): Promise<PbtiListResult[]> => {
  const res = await axiosInstance.get<ApiResponsePbtiListResult>("/pbti/result/list");
  const data = res.data.result.result;
  
  return data;
};

/// PBTI 결과 삭제
export const deletePBTIResult = async (pbtiId: number): Promise<void> => {
  const { data }: { data: ApiResponseVoid } = 
    await axiosInstance.delete(`/pbti/${pbtiId}/result`);
  return;
};
