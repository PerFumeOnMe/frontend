import { useContext } from "react";
import {
  PerfumeLab,
  type PerfumeLabContextType,
} from "../../context/PerfumeLabContext";

export const usePerfumeLab = (): PerfumeLabContextType => {
  const context = useContext(PerfumeLab);
  if (!context) {
    throw new Error("usePerfumeLab must be used within a PerfumeLabProvider");
  }
  return context;
};
