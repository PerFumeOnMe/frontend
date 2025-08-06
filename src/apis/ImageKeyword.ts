import { axiosInstance } from './axios';
import type { ImageKeywordPreviewRequestDto, ImageKeywordPreviewResponseDto } from '../types/apis/ImageKeyword';

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