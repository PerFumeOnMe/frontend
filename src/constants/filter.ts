// 노트 카테고리
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

// 성별
export const GENDER_TYPES = [
    { id: 'MALE', label: '남성용' },
    { id: 'FEMALE', label: '여성용' },
    { id: 'NEUTRAL', label: '남녀공용' },
] as const;

// 향수 타입
export const FRAGRANCE_TYPES = [
    { 
        id: 'PERFUME', 
        label: '퍼퓸',
        description: '퍼퓸은 주로 6~8시간 정도 지속하며, 실내 전체에 퍼질 정도의 발향력을 가지고 있어요.'
    },
    { 
        id: 'EAU_DE_PERFUME', 
        label: '오 드 퍼퓸',
        description: '오 드 퍼퓸은 주로 4~6시간 정도 지속하며, 복도에서 확실히 퍼질 정도의 발향력을 가지고 있어요.'
    },
    { 
        id: 'EAU_DE_TOILETTE', 
        label: '오 드 뚜왈렛',
        description: '오 드 뚜왈렛은 주로 2~4시간 정도 지속하며, 바로 옆자리에서 은은히 퍼질 정도의 발향력을 가지고 있어요.'
    },
    { 
        id: 'EAU_DE_COLOGNE', 
        label: '오 드 코롱',
        description: '오 드 코롱은 주로 1~2시간 정도 지속하며, 피부 바로 위에서 은은히 퍼질 정도의 발향력을 가지고 있어요.'
    },
    { 
        id: 'SHOWER_COLOGNE', 
        label: '샤워 코롱',
        description: '샤워 코롱은 주로 0.5~1시간 정도 지속하며, 온몸 가까이에서만 느껴질 정도의 발향력을 가지고 있어요.'
    },
] as const;

// 사용 상황
export const SITUATION_TYPES = [
  { id: 1, label: '데이트/로맨틱용' },
  { id: 2, label: '일상용' },
  { id: 3, label: '출근/오피스용' },
  { id: 4, label: '무거운향' },
  { id: 5, label: '파티/야간용' },
  { id: 6, label: '가벼운향' },
] as const;

// 계절
export const SEASON_TYPES = [
  { id: 1, label: '봄' },
  { id: 2, label: '여름' },
  { id: 3, label: '가을' },
  { id: 4, label: '겨울' },
] as const;

// 가격대 UI
export const PRICE_RANGES = [
    { id: 1, label: '5만원 이하', value: { min: 0, max: 50000 } },
    { id: 2, label: '5~15만원', value: { min: 50000, max: 150000 } },
    { id: 3, label: '15~30만원', value: { min: 150000, max: 300000 } },
    { id: 4, label: '30만원 이상', value: { min: 300000, max: undefined } },
] as const;

// 필터 순서
export const FILTER_ORDER = [
  'noteCategoryId',
  'gender',
  'fragranceType',
  'situationId',
  'seasonId',
  'price'
] as const;
