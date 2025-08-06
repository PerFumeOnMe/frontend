import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { getFragranceDetail } from "../apis/Fragrance";
import type { ResponseFragranceDetailDto } from "../types/apis/Fragrance";

interface PerfumeDetailContextType {
  fragrance: ResponseFragranceDetailDto | null;
  refetch: (id: number) => Promise<void>;
}

const PerfumeDetailContext = createContext<
  PerfumeDetailContextType | undefined
>(undefined);

interface PerfumeDetailProviderProps {
  children: ReactNode;
  fragranceId: number;
}

export const PerfumeDetailProvider = ({
  children,
  fragranceId,
}: PerfumeDetailProviderProps) => {
  const [fragrance, setFragrance] = useState<ResponseFragranceDetailDto | null>(
    null
  );

  const fetchFragranceDetail = async (id: number) => {
    const response = await getFragranceDetail(id);
    setFragrance(response);
  };

  // 데이터를 다시 불러오는 함수
  const refetch = async (id: number) => {
    await fetchFragranceDetail(id);
  };

  useEffect(() => {
    if (fragranceId) {
      fetchFragranceDetail(fragranceId);
    }
  }, [fragranceId]);

  const value: PerfumeDetailContextType = {
    fragrance,
    refetch,
  };

  return (
    <PerfumeDetailContext.Provider value={value}>
      {children}
    </PerfumeDetailContext.Provider>
  );
};

export { PerfumeDetailContext };
export type { PerfumeDetailContextType };
