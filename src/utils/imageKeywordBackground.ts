import { AMBIENCE_OPTIONS } from '../types/ImageKeyword/imageKeyword.const';
import bg1 from '../assets/ImageKeyword/bg1.png';
import bg2 from '../assets/ImageKeyword/bg2.png';
import bg3 from '../assets/ImageKeyword/bg3.png';
import bg4 from '../assets/ImageKeyword/bg4.png';
import bg5 from '../assets/ImageKeyword/bg5.png';
import bg6 from '../assets/ImageKeyword/bg6.png';
import bg7 from '../assets/ImageKeyword/bg7.png';
import bg8 from '../assets/ImageKeyword/bg8.png';
import bg9 from '../assets/ImageKeyword/bg9.png';
import bg10 from '../assets/ImageKeyword/bg10.png';

// 분위기 키워드별 배경 이미지 매핑
const BACKGROUND_MAPPING: Record<typeof AMBIENCE_OPTIONS[number], string> = {
    "세련된": bg1,    // 세련되고 모던한 배경
    "귀여운": bg2,    // 밝고 귀여운 파스텔톤 배경
    "차분한": bg3,    // 차분하고 안정적인 배경
    "성숙한": bg4,    // 깊이 있고 성숙한 배경
    "러블리한": bg5,  // 사랑스럽고 따뜻한 배경
    "시크한": bg6,    // 시크하고 도시적인 배경
    "신비로운": bg7,  // 신비롭고 몽환적인 배경
    "밝은": bg8,      // 밝고 경쾌한 배경
    "몽환적인": bg9,  // 부드럽고 몽환적인 배경
    "우아한": bg10,   // 우아하고 고급스러운 배경
} as const;

export const getBackgroundImage = (ambience: typeof AMBIENCE_OPTIONS[number]): string => {
    return BACKGROUND_MAPPING[ambience];
}; 