import { SlArrowLeft } from "react-icons/sl";

const PerfumeDetailHeader = () => {
  return (
    <div className="w-full relative">
      <img
        src="https://picsum.photos/480/500"
        alt="PerfumeImage"
        className="w-full h-100 object-cover rounded-b-3xl"
      />
      <div className="absolute top-4 left-4 bg-black rounded-full p-3 shadow-md">
        <SlArrowLeft className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default PerfumeDetailHeader;
