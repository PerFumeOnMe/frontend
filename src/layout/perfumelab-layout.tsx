import { Outlet } from "react-router-dom";
import { PerfumeLabProvider } from "../contexts/PerfumeLabContext";

const PerfumeLabLayout = () => {
  return (
    <PerfumeLabProvider>
      <Outlet />
    </PerfumeLabProvider>
  );
};

export default PerfumeLabLayout;
