import CategoryItem from "./CategoryItem";

interface CategorySectionProps {
  title: string;
  items: string[];
  activeItems: string[];
  isGrid?: boolean;
}

const CategorySection = ({
  title,
  items,
  activeItems,
  isGrid = false,
}: CategorySectionProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-title4 mb-4">{title}</h2>
      <div className={isGrid ? "grid grid-cols-2 gap-x-1" : "flex flex-col"}>
        {items.map((item) => (
          <CategoryItem
            key={item}
            label={item}
            isActive={activeItems.includes(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
