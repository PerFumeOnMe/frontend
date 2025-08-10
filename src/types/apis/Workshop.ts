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
  recommendedFragranceJson: PerfumeDetail[];
}>;

export type RequestWorkshopSaveDto = {
  savedName: string;
};

export type ResponseWorkshopSaveDto = CommonResponse<{
  workshopId: number;
  savedName: string;
  createdAt: string;
}>;
