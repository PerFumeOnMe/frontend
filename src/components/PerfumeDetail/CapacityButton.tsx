const CapacityButton = ({
  capacity,
  onClick,
  isSelected = false,
}: {
  capacity: string;
  onClick: () => void;
  isSelected?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`pt-1 pb-1 pl-3 pr-3 rounded-lg flex items-center justify-center transition-all duration-200 text-caption1 ${
        isSelected
          ? "bg-main-500 text-white"
          : "bg-white text-grayscale-1000 border border-grayscale-800"
      }`}
    >
      {capacity}
    </button>
  );
};

export default CapacityButton;
