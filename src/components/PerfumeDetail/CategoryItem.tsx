interface CategoryItemProps {
  label: string;
  isActive: boolean;
}

const CategoryItem = ({ label, isActive }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div
        className={`
          w-4 h-4 rounded-full border-1 flex items-center justify-center transition-all duration-200
          ${isActive ? "border-main-500" : "border-grayscale-400 bg-white"}
        `}
      >
        {isActive && <div className="w-3 h-3 rounded-full bg-main-500"></div>}
      </div>
      <span
        className={`text-body4 ${
          isActive ? "text-main-500 font-medium" : "text-grayscale-900"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default CategoryItem;
