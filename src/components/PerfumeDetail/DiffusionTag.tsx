interface ScentTagProps {
  label: string;
  description: string;
  isActive: boolean;
}

const DiffusionTag = ({ label, description, isActive }: ScentTagProps) => {
  return (
    <div
      className={`
        inline-flex flex-col justify-center px-2 py-1 rounded-2xl border-1 transition-all duration-200
        ${
          isActive
            ? "border-main-500 bg-main-white text-main-500"
            : "border-grayscale-600 bg-white text-grayscale-700"
        }
      `}
    >
      <span className={`${isActive ? "text-body4" : "text-caption1"}`}>
        {label}
      </span>
      <span className="text-caption2">{description}</span>
    </div>
  );
};

export default DiffusionTag;
