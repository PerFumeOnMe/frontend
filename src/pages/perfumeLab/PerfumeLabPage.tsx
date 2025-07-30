import PerfumeLabContent from "../../components/PerfumeLabPage/PerfumeLabContent";
import { PerfumeLabProvider } from "../../contexts/PerfumeLabContext";

const PerfumeLabPage = () => {
  return (
    <PerfumeLabProvider>
      <PerfumeLabContent />
    </PerfumeLabProvider>
  );
};

export default PerfumeLabPage;
