import { useContext } from "react";
import {
  PerfumeDetailContext,
  type PerfumeDetailContextType,
} from "../context/PerfumeDetailContext";

export const usePerfumeDetail = (): PerfumeDetailContextType => {
  const context = useContext(PerfumeDetailContext);
  if (context === undefined) {
    throw new Error(
      "usePerfumeDetail must be used within a PerfumeDetailProvider"
    );
  }
  return context;
};

export const useHeaderImage = () => {
  const { fragrance } = usePerfumeDetail();
  return { imageURL: fragrance?.result?.imageURL };
};

export const usePerfumeBasicInfo = () => {
  const { fragrance } = usePerfumeDetail();
  return {
    id: fragrance?.result?.id,
    brand: fragrance?.result?.brand,
    name: fragrance?.result?.name,
    priceList: fragrance?.result?.priceList,
    keyword: fragrance?.result?.keyword,
    liked: fragrance?.result?.liked,
  };
};

export const useDescription = () => {
  const { fragrance } = usePerfumeDetail();
  return { description: fragrance?.result?.description };
};

export const usePerfumeExtraInfo = () => {
  const { fragrance } = usePerfumeDetail();
  return {
    lastingPower: fragrance?.result?.fragranceType.lastingPower,
    diffusionRange: fragrance?.result?.fragranceType.diffusionRange,
    gender: fragrance?.result?.gender,
    locations: fragrance?.result?.locations,
    seasons: fragrance?.result?.seasons,
  };
};

export const usePerfumeNotes = () => {
  const { fragrance } = usePerfumeDetail();
  return { note: fragrance?.result?.note };
};

export const useHomepageURL = () => {
  const { fragrance } = usePerfumeDetail();
  return { homepageURL: fragrance?.result?.homePageUrl };
};

// 향수 특성 훅
