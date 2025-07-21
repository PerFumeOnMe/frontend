import type { Perfume } from "./perfume";

export interface FilterParams {
    noteCategoryId?: number;
    gender?: Gender;
    fragranceType?: FragranceType;
    situation?: Situation;
    season?: Season;
    priceMin?: number;
    priceMax?: number;
    page: number;
    size: number;
}

export type Gender = 'MALE' | 'FEMALE' | 'NEUTRAL';
export type FragranceType = 'PERFUME' | 'EAU_DE_PERFUME' | 'EAU_DE_TOILETTE' | 'EAU_DE_COLOGNE' | 'SHOWER_COLOGNE';
export type Situation = 'DAILY' | 'OFFICE' | 'DATE' | 'PARTY' | 'HEAVY' | 'LIGHT';
export type Season = 'SPRING' | 'SUMMER' | 'FALL' | 'WINTER';

export interface FilterResponse {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {
        content: FilteredPerfume[];
        hasNext: boolean;
    };
}

export interface FilteredPerfume {
    id: number;
    brand: string;
    name: string;
    minPrice: number;
    imageUrl: string;
    liked: boolean;
}

export const NOTE_CATEGORIES = [
    { id: 42, label: '머스크' },
    { id: 14, label: '베르가못' },
    { id: 17, label: '시더우드' },
    { id: 29, label: '핑크 페퍼' },
    { id: 41, label: '로즈' },
    { id: 72, label: '파출리' },
    { id: 5, label: '화이트 머스크' },
    { id: 11, label: '베티버' },
    { id: 37, label: '바닐라' },
    { id: 38, label: '샌달우드' },
    { id: 43, label: '앰버' },
    { id: 49, label: '자스민' },
    { id: 2, label: '자몽' },
    { id: 40, label: '아이리스' },
] as const;

export const FRAGRANCE_TYPES = [
    { id: 'PERFUME', label: '퍼퓸' },
    { id: 'EAU_DE_PERFUME', label: '오 드 퍼퓸' },
    { id: 'EAU_DE_TOILETTE', label: '오 드 뚜왈렛' },
    { id: 'EAU_DE_COLOGNE', label: '오 드 코롱' },
    { id: 'SHOWER_COLOGNE', label: '샤워 코롱' },
] as const;

export const GENDER_TYPES = [
    { id: 'MALE', label: '남성용' },
    { id: 'FEMALE', label: '여성용' },
    { id: 'NEUTRAL', label: '남녀공용' },
] as const;

export const SITUATION_TYPES = [
    { id: 'DAILY', label: '일상용' },
    { id: 'OFFICE', label: '출근용/오피스용' },
    { id: 'DATE', label: '데이트/로맨틱' },
    { id: 'PARTY', label: '파티/야간용' },
    { id: 'HEAVY', label: '무거운 향' },
    { id: 'LIGHT', label: '가벼운 향' }
] as const;

export const SEASON_TYPES = [
    { id: 'SPRING', label: '봄' },
    { id: 'SUMMER', label: '여름' },
    { id: 'FALL', label: '가을' },
    { id: 'WINTER', label: '겨울' },
] as const;

export const PRICE_RANGES = [
    { id: 1, label: '10,000원 ~ 50,000원', min: 10000, max: 50000 },
    { id: 2, label: '50,000원 ~ 150,000원', min: 50000, max: 150000 },
    { id: 3, label: '150,000원 ~ 300,000원', min: 150000, max: 300000 },
    { id: 4, label: '300,000원 이상', min: 300000, max: undefined },
] as const; 