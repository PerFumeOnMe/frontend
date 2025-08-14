import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useHeaderImage } from "../../hooks/usePerfumeDetail";

const PerfumeDetailHeader = () => {
  const { imageURL } = useHeaderImage();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full relative">
      <img
        src={imageURL}
        alt="PerfumeImage"
        className="w-full h-100 object-cover rounded-b-3xl shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.05),0_10px_10px_-3px_rgba(0,0,0,0.05)]"
        style={{
          objectPosition: "center 60%",
        }}
      />
      <div
        className="absolute top-4 left-4 bg-black rounded-full p-3 shadow-md"
        onClick={handleGoBack}
      >
        <SlArrowLeft className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default PerfumeDetailHeader;
