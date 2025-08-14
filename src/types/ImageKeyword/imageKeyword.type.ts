import {
    KEYWORD_CATEGORIES,
    AMBIENCE_OPTIONS,
    STYLE_OPTIONS,
    GENDER_OPTIONS,
    SEASON_OPTIONS,
    PERSONALITY_OPTIONS,
} from './imageKeyword.const';

// API 응답 코드 정의
export type CommonResponseCode = 'COMMON200';
export type ImageKeywordErrorCode = 'IK001' | 'IK002' | 'IK003';

// 키워드 카테고리 타입
export type KeywordCategory = typeof KEYWORD_CATEGORIES[number];

// 각 카테고리의 타입 정의 (상수 배열로부터 타입 추론)
export type AmbienceType = typeof AMBIENCE_OPTIONS[number];
export type StyleType = typeof STYLE_OPTIONS[number];
export type GenderType = typeof GENDER_OPTIONS[number];
export type SeasonType = typeof SEASON_OPTIONS[number];
export type PersonalityType = typeof PERSONALITY_OPTIONS[number];
