export type Perfume = {
  id: number;
  brand: string;
  name: string;
  minPrice: number;
  imageUrl: string;
  liked: boolean;
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

export interface fragranceType {
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
  note: PerfumeNotes;
  fragranceType: fragranceType;
  gender: string;
  locations: string[];
  seasons: string[];
  homePageUrl: string;
  imageURL: string;
  liked: boolean;
}
