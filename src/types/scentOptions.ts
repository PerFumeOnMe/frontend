// scentOptions.ts
import type { Scent } from "./scent";

// 경로 alias(@)는 vite.config에 맞게 조정
import citrus from "@/assets/Onboarding/citrus.png";
import musk from "@/assets/Onboarding/musk.png";
import bergamot from "@/assets/Onboarding/bergamot.png";
import cedarwood from "@/assets/Onboarding/cedarwood.png";
import pink_pepper from "@/assets/Onboarding/pink_pepper.png";
import rose from "@/assets/Onboarding/rose.png";
import patchouli from "@/assets/Onboarding/patchouli.png";
import white_musk from "@/assets/Onboarding/white_musk.png";
import vetiver from "@/assets/Onboarding/vetiver.png";
import vanilla from "@/assets/Onboarding/vanilla.png";
import sandalwood from "@/assets/Onboarding/sandalwood.png";
import amber from "@/assets/Onboarding/amber.png";
import jasmine from "@/assets/Onboarding/jasmine.png";
import grapefruit from "@/assets/Onboarding/grapefruit.png";
import iris from "@/assets/Onboarding/iris.png";

export const scentOptions: (Scent & { noteCategoryId: number; png: string })[] = [
  { id: "citrus", description: "레몬, 오렌지...", png: citrus, noteCategoryId: 108 },
  { id: "musk", description: "막 세탁한 옷...", png: musk, noteCategoryId: 42 },
  { id: "bergamot", description: "쌉쌀하면서도...", png: bergamot, noteCategoryId: 14 },
  { id: "cedarwood", description: "깊은 숲속...", png: cedarwood, noteCategoryId: 17 },
  { id: "pinkPepper", description: "살짝 매콤...", png: pink_pepper, noteCategoryId: 29 },
  { id: "rose", description: "장미꽃을...", png: rose, noteCategoryId: 41 },
  { id: "patchouli", description: "젖은 흙...", png: patchouli, noteCategoryId: 72 },
  { id: "whiteMusk", description: "햇빛에 말린...", png: white_musk, noteCategoryId: 5 },
  { id: "vetiver", description: "풀숲이나...", png: vetiver, noteCategoryId: 11 },
  { id: "vanilla", description: "달달한 과자...", png: vanilla, noteCategoryId: 37 },
  { id: "sandalwood", description: "우유처럼...", png: sandalwood, noteCategoryId: 38 },
  { id: "amber", description: "촛불이나...", png: amber, noteCategoryId: 43 },
  { id: "jasmine", description: "밤에 피는...", png: jasmine, noteCategoryId: 49 },
  { id: "grapefruit", description: "톡 쏘는...", png: grapefruit, noteCategoryId: 2 },
  { id: "iris", description: "가루를 바른...", png: iris, noteCategoryId: 40 },
];
