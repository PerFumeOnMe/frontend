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

export const getBackgroundImage = (keyword: string): string => {
    switch(keyword) {
        case "세련된": return bg1;
        case "귀여운": return bg2;
        case "차분한": return bg3;
        case "성숙한": return bg4;
        case "러블리한": return bg5;
        case "시크한": return bg6;
        case "신비로운": return bg7;
        case "밝은": return bg8;
        case "몽환적인": return bg9;
        case "우아한": return bg10;
        default: return bg1;
    }
}; 