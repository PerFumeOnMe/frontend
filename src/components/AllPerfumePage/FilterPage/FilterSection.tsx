interface FilterOption {
    id: string | number;
    label: string;
    description?: string;
}

interface FilterSectionProps {
    title: string;
    options: readonly FilterOption[];
    selectedId?: string | number;
    onSelect: (id: string | number | undefined) => void;
}

export default function FilterSection({
    title,
    options,
    selectedId,
    onSelect
}: FilterSectionProps) {
    return (
        <section>
            <h2 className="text-title3 text-grayscale-1000 mb-[8px]">{title}</h2>
            <div className="flex flex-wrap gap-[12px]">
                {options.map(option => (
                    <button
                        key={option.id}
                        onClick={() => onSelect(selectedId === option.id ? undefined : option.id)}
                        className={`px-[12px] py-[4px] text-body3 rounded-[100px] border border-[0.8px] ${
                            selectedId === option.id
                                ? 'border-main-500 text-main-400 bg-main-10'
                                : 'border-grayscale-700 text-grayscale-700'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </section>
    );
} 