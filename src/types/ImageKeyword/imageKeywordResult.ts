// 이미지 키워드 요청 타입
export interface ImageKeywordRequest {
    ambience: string;    // 분위기
    style: string;       // 스타일
    gender: string;      // 성별
    season: string;      // 계절
    character: string; // 성격
}

// 추천 향수 타입
export interface RecommendedPerfume {
    brand: string;
    name: string;
    topNote: string;
    middleNote: string;
    baseNote: string;
    description: string;
    relatedKeywords: string[];
}

// 이미지 키워드 결과 타입
export interface ImageKeywordResult {
    keywords: string[];
    descriptions: string;
    scenario: string;
    characterImageUrl: string;
    recommendations: RecommendedPerfume[];
}

// API 응답 타입
export interface ApiResponse<T> {
    isSuccess: boolean;
    code: string;
    message: string;
    result: T;
}

// 이미지 키워드 저장 요청 타입
export interface SaveImageKeywordRequest {
    savedName: string;
}

// 이미지 키워드 저장 결과 타입
export interface SaveImageKeywordResult {
    imageKeywordId: number;
    savedName: string;
    createdAt: string;
}

// 에러 결과 타입
export interface ErrorResult {
    keyword?: string;
} 
