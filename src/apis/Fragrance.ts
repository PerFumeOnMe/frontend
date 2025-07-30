import { axiosInstance } from '../apis/axios';
import type { MdChoiceResponse, TrendingResponse, FavoriteResponse } from '../types/apis/Fragrance';

export const getMdChoice = async (): Promise<MdChoiceResponse> => {
    try {
        const res = await axiosInstance.get<MdChoiceResponse>(
            "/fragrances/md-choice"
        );
        return res.data;
    } catch (error) {
        console.error('Failed to fetch MD choice:', error);
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
        console.error('Failed to fetch trending:', error);
        throw error;
    }
}

export const addToFavorites = async (fragranceId: number): Promise<FavoriteResponse> => {
    try {
        const res = await axiosInstance.post<FavoriteResponse>(
            `/fragrances/${fragranceId}/favorites`
        );
        return res.data;
    } catch (error) {
        console.error('Failed to add to favorites:', error);
        throw error;
    }
};

export const removeFromFavorites = async (fragranceId: number): Promise<FavoriteResponse> => {
    try {
        const res = await axiosInstance.delete<FavoriteResponse>(
            `/fragrances/${fragranceId}/favorites`
        );
        return res.data;
    } catch (error) {
        console.error('Failed to remove from favorites:', error);
        throw error;
    }
}