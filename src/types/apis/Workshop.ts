import type { PerfumeDetail } from "../PerfumeLab/PerfumeLabResult";
import type { CommonResponse } from "./common";

export type RequestWorkshopDto = {
  topNote: string;
  topNoteVolume: number;
  middleNote: string;
  middleNoteVolume: number;
  baseNote: string;
  baseNoteVolume: number;
};

export type ResponseWorkshopDto = CommonResponse<{
  topNote: string;
  topNoteVolume: number;
  middleNote: string;
  middleNoteVolume: number;
  baseNote: string;
  baseNoteVolume: number;
  keywordSummary: string;
  firstImpression: string;
  centerImpression: string;
  lastImpression: string;
  tendency: string;
  remembered: string;
  recommendedFragranceJson: PerfumeDetail[];
}>;

export type WorkShopListResponseDTO = CommonResponse<WorkShopMyPerfume[]>

export type WorkShopMyPerfume = {
  brand : number,
  name : string,
  imageUrl : string,
}

export type RequestWorkshopSaveDto = {
  savedName: string;
};

export type ResponseWorkshopSaveDto = CommonResponse<WorkshopSaveDto[]>;

export type WorkshopSaveDto = {
  workshopId: number;
  savedName: string;
  createdAt: string;
}