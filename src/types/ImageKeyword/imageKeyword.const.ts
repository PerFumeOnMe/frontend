import type { KeywordCategory } from './imageKeyword.type';

// 분위기 키워드 옵션
export const AMBIENCE_OPTIONS = [
    "세련된",
    "귀여운",
    "차분한",
    "성숙한",
    "러블리한",
    "시크한",
    "신비로운",
    "밝은",
    "몽환적인",
    "우아한",
] as const;

// 스타일 키워드 옵션
export const STYLE_OPTIONS = [
    "유니크한",
    "스트릿한",
    "로맨틱한",
    "힙한",
    "모던한",
    "클래식한",
    "빈티지한",
    "캐주얼한",
    "미니멀한",
    "레트로한",
] as const;

// 성별 키워드 옵션
export const GENDER_OPTIONS = [
    "여성적인",
    "남성적인",
    "중성적인",
] as const;

// 계절 키워드 옵션
export const SEASON_OPTIONS = [
    "봄",
    "여름",
    "가을",
    "겨울",
] as const;

// 성격 키워드 옵션
export const CHARACTER_OPTIONS = [
    "조용한",
    "논리적인",
    "개성강한",
    "카리스마 있는",
    "신중한",
    "활발한",
    "따뜻한",
    "감성적인",
    "친근한",
    "쾌활한",
] as const;

// UI에서 사용할 매핑 상수
export const KEYWORD_OPTIONS: Record<KeywordCategory, readonly string[]> = {
    ambience: AMBIENCE_OPTIONS,
    style: STYLE_OPTIONS,
    gender: GENDER_OPTIONS,
    season: SEASON_OPTIONS,
    character: CHARACTER_OPTIONS,
} as const;

// 카테고리 한글 매핑
export const CATEGORY_KOREAN: Record<KeywordCategory, string> = {
    ambience: '분위기',
    style: '스타일',
    gender: '성별',
    season: '계절',
    character: '성격',
} as const; 