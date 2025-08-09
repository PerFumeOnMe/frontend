import { axiosInstance } from './axios';
import type { ImageKeywordPreviewRequestDto, ImageKeywordPreviewResponseDto, ImageKeywordSaveRequestDto, ImageKeywordSaveResponseDto } from '../types/apis/ImageKeyword';

export const postImageKeywordPreview = async (keywords: ImageKeywordPreviewRequestDto): Promise<ImageKeywordPreviewResponseDto> => {
    try {
        const res = await axiosInstance.post<ImageKeywordPreviewResponseDto>(
            '/image-keyword/preview',
            keywords
        );
        return res.data;
    } catch (error) {
        console.error('Failed to get image keyword preview:', error);
        throw error;
    }
}; 

export const postImageKeywordSave = async (savedName: ImageKeywordSaveRequestDto): Promise<ImageKeywordSaveResponseDto> => {
    try {
        const res = await axiosInstance.post<ImageKeywordSaveResponseDto>(
            '/image-keyword/save',
            savedName
        );
        return res.data;
    } catch (error) {
        console.error('Failed to save image keyword:', error);
        throw error;
    }
}