import { axiosInstance } from '../apis/axios';
import type {
  MdChoiceResponse,
  TrendingResponse,
  FavoriteResponse,
  ResponseFragranceDetailDto,
  PerfumeResponseDto,
  SearchResponseDto,
} from "../types/apis/Fragrance";
import type { MyPerfumeResponseDto } from "../types/apis/Fragrance";

export const getMdChoice = async (): Promise<MdChoiceResponse> => {
  try {
    const res = await axiosInstance.get<MdChoiceResponse>(
      "/fragrances/md-choice"
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch MD choice:", error);
    throw error;
  }
};

export const getTrending = async (): Promise<TrendingResponse> => {
  try {
    const res = await axiosInstance.get<TrendingResponse>(
      "/fragrances/trending"
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch trending:", error);
    throw error;
  }
};

export const addToFavorites = async (
  fragranceId: number
): Promise<FavoriteResponse> => {
  try {
    const res = await axiosInstance.post<FavoriteResponse>(
      `/fragrances/${fragranceId}/favorites`
    );
    return res.data;
  } catch (error) {
    console.error("Failed to add to favorites:", error);
    throw error;
  }
};

export const removeFromFavorites = async (
  fragranceId: number
): Promise<FavoriteResponse> => {
  try {
    const res = await axiosInstance.delete<FavoriteResponse>(
      `/fragrances/${fragranceId}/favorites`
    );
    return res.data;
  } catch (error) {
    console.error("Failed to remove from favorites:", error);
    throw error;
  }
};

export const getFragranceDetail = async (
  fragranceId: number
): Promise<ResponseFragranceDetailDto> => {
  try {
    const res = await axiosInstance.get<ResponseFragranceDetailDto>(
      `/fragrances/allow/${fragranceId}`
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch fragrance detail:", error);
    throw error;
  }
};

export const getAllPerfumes = async (page: number = 0, size: number = 12) => {
  try {
    const res = await axiosInstance.get<PerfumeResponseDto>(
      "/fragrances/allow/all",
      {params: { page, size }}
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch all perfumes:", error);
    throw error;
  }
};

export const getMyPerfumes = async (): Promise<MyPerfumeResponseDto> => {
  try {
    const res = await axiosInstance.get<MyPerfumeResponseDto>(
      "/fragrances/my-perfume"
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch my perfumes:", error);
    throw error;
  }
};

export const searchPerfumes = async (keyword: string, page: number = 0, size: number = 12) => {
  try {
    const res = await axiosInstance.get<SearchResponseDto>(
      "/fragrances/allow/search",
      {params: { keyword, page, size }}
    );
    return res.data;
  } catch (error) {
    console.error("Failed to search perfumes:", error);
    throw error;
  }
}