export interface AllPerfumeDetail {
  recommendedFragranceJson: PerfumeDetail[];
}

export interface PerfumeDetail {
  brand: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
