import type { Note } from "./note";

export interface NoteOption {
  id: string;
  emotion: string;
  krName: string;
  description: string;
  color: string;
  img: string;
}

// 베이스 노트 옵션
const baseNoteOptions: NoteOption[] = [
  {
    id: "vanilla",
    emotion: "🍦",
    krName: "바닐라",
    description: "바닐라빈, 아이스크림, 쿠키 등 달콤한 바닐라 향",
    color: "#BFA76D",
    img: "/src/assets/PerfumeLab/scents/vanilla.jpg",
  },
  {
    id: "musk",
    emotion: "🍼",
    krName: "머스크",
    description: "베이비 파우더, 순면 타월, 바디로션 등 부드러운 향",
    color: "#988B80",
    img: "/src/assets/PerfumeLab/scents/musk.jpg",
  },
  {
    id: "sandalwood",
    emotion: "🪵",
    krName: "샌달우드",
    description: "명상용 향 스틱, 목조가구, 샤워 비누 등 크리미한 우디향",
    color: "#A16E4A",
    img: "/src/assets/PerfumeLab/scents/sandalwood.jpg",
  },
  {
    id: "patchouli",
    emotion: "🍂",
    krName: "패츌리",
    description: "가죽소파, 숲속 흙길, 요가 매트 등 스파이시한 흙내음",
    color: "#654A2C",
    img: "/src/assets/PerfumeLab/scents/patchouli.jpg",
  },
  {
    id: "amber",
    emotion: "🍯",
    krName: "앰버",
    description: "호박 구슬, 꿀, 향초 등 따뜻한 레진 향",
    color: "#CC9400",
    img: "/src/assets/PerfumeLab/scents/amber.jpg",
  },
  {
    id: "cedarwood",
    emotion: "🌲",
    krName: "시더우드",
    description: "목조 서랍장, 솔방울, 데크 바닥 등 드라이 우디 향",
    color: "#612B10",
    img: "/src/assets/PerfumeLab/scents/cedarwood.jpg",
  },
];

// 미들 노트 옵션
const middleNoteOptions: NoteOption[] = [
  {
    id: "rose",
    emotion: "🌹",
    krName: "로즈",
    description: "장미꽃, 로즈워터, 꽃잎 목욕 등 로맨틱한 플로럴 향",
    color: "#A95B6D",
    img: "/src/assets/PerfumeLab/scents/rose.jpg",
  },
  {
    id: "jasmine",
    emotion: "🌼",
    krName: "자스민",
    description: "야생 자스민 꽃, 나이트 가든 등 관능적 화이트 플로럴 향",
    color: "#B49E5F",
    img: "/src/assets/PerfumeLab/scents/jasmine.jpg",
  },
  {
    id: "lavender",
    emotion: "💜",
    krName: "라벤더",
    description: "라벤더 번들, 아로마 베개, 허브차 등 상쾌한 허브향",
    color: "#715F8C",
    img: "/src/assets/PerfumeLab/scents/lavender.jpg",
  },
  {
    id: "ylangYlang",
    emotion: "🌺",
    krName: "일랑일랑",
    description: "열대 과일 바구니, 디퓨저 스틱 등 이국적 플로럴 향",
    color: "#B88F00",
    img: "/src/assets/PerfumeLab/scents/ylangylang.jpg",
  },
  {
    id: "iris",
    emotion: "⚜️",
    krName: "아이리스",
    description: "붓꽃, 파우더, 고급 비누 등 우아한 파우더리 향",
    color: "#4E3A8E",
    img: "/src/assets/PerfumeLab/scents/iris.jpg",
  },
  {
    id: "peony",
    emotion: "🏵️",
    krName: "피오니",
    description: "꽃다발, 웨딩 부케, 꽃잎 목욕 등 부드럽고 풍성한 향",
    color: "#C17F86",
    img: "/src/assets/PerfumeLab/scents/peony.jpg",
  },
];

// 탑 노트 옵션
const topNoteOptions: NoteOption[] = [
  {
    id: "bergamot",
    emotion: "🍏",
    krName: "베르가못",
    description: "이탈리아 감귤, 칵테일 등 부드러운 시트러스 향",
    color: "#8B951F",
    img: "/src/assets/PerfumeLab/scents/bergamot.jpg",
  },
  {
    id: "lemon",
    emotion: "🍋",
    krName: "레몬",
    description: "레모네이드, 레몬 껍질, 세제 거품 등 상큼한 시트러스 향",
    color: "#C4B312",
    img: "/src/assets/PerfumeLab/scents/lemon.jpg",
  },
  {
    id: "orange",
    emotion: "🍊",
    krName: "오렌지",
    description: "오렌지 주스, 귤, 과일바구니 등 달콤한 시트러스 향",
    color: "#D87D00",
    img: "/src/assets/PerfumeLab/scents/orange.jpg",
  },
  {
    id: "grapefruit",
    emotion: "🍊",
    krName: "자몽",
    description: "자몽 반쪽, 샐러드 볼, 스킨 토너 등 쌉사름한 향",
    color: "#C14B3C",
    img: "/src/assets/PerfumeLab/scents/grapefruit.jpg",
  },
  {
    id: "apple",
    emotion: "🍎",
    krName: "사과",
    description: "사과파이, 사과주스 등 달콤하고 상큼한 과일향",
    color: "#556B2F",
    img: "/src/assets/PerfumeLab/scents/apple.jpg",
  },
  {
    id: "pepperMint",
    emotion: "🌿",
    krName: "페퍼민트",
    description: "페퍼민트 차, 민트 캔디, 치약 등 시원한 허브 향",
    color: "#3B8B75",
    img: "/src/assets/PerfumeLab/scents/peppermint.jpg",
  },
];

// 노트별 옵션 매핑
export const noteOptions: Record<Note, NoteOption[]> = {
  베이스: baseNoteOptions,
  미들: middleNoteOptions,
  탑: topNoteOptions,
};

export const noteDescriptions: Record<Note, string> = {
  베이스:
    "베이스 노트는 향수의 여운입니다. 시간이 흐를수록 은은하게 퍼지며, 향기의 정체성과 기억을 조용히 각인시킵니다.",
  미들: "미들 노트는 향수의 중심이 되는 향이에요. 탑 노트가 사라진 후 퍼지며, 향의 분위기와 성격을 결정하죠.",
  탑: "탑 노트는 향수의 첫인상입니다. 처음 뿌렸을 때 가장 먼저 느껴지는 향입니다.",
};
