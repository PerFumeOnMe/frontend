export interface Perfume {
  imageUrl: string;
  brand: string;
  name: string;
  price: number;
  isLiked: boolean;
}

export interface PriceInfo {
  mlcount: number;
  price: number;
}

export interface NoteDetail {
  ingredients: string[];
  keywords: string;
  description: string;
}

export interface PerfumeNotes {
  top: NoteDetail;
  middle: NoteDetail;
  base: NoteDetail;
}

export interface fragnanceType {
  lastingPower: string;
  diffusionRange: number;
  diffusionPower: string;
}

export interface PerfumeDetail {
  id: number;
  brand: string;
  name: string;
  priceList: PriceInfo[];
  keyword: string;
  description: string;
  notes: PerfumeNotes;
  fragnanceType: fragnanceType;
  gender: string;
  locations: string[];
  seasons: string[];
  homePageUrl: string;
  imageURL: string;
  liked: boolean;
}
