import { Outlet } from "react-router-dom";
import { PerfumeLabProvider } from "../context/PerfumeLabContext";

const PerfumeLabLayout = () => {
  return (
    <PerfumeLabProvider>
      <Outlet />
    </PerfumeLabProvider>
  );
};

export default PerfumeLabLayout;
