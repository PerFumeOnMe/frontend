export type FilterParams = {
    noteCategoryId?: number;
    gender?: 'MALE' | 'FEMALE' | 'NEUTRAL';
    fragranceType?: 'PERFUME' | 'EAU_DE_PERFUME' | 'EAU_DE_TOILETTE' | 'EAU_DE_COLOGNE' | 'SHOWER_COLOGNE';
    situationId?: number;
    seasonId?: number;
    priceMin?: number;
    priceMax?: number;
    page: number;
    size: number;
}
