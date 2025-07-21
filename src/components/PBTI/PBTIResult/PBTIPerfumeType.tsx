type PBTIPerfumeTypeProps = {
  type: string;
  level: number;
};

const PBTIPerfumeType: React.FC<PBTIPerfumeTypeProps> = ({ type, level }) => {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="w-24 text-right text-body3 font-medium pr-4">{type}</div>
      <div className="flex gap-1">
        {Array.from({ length: level }).map((_, idx) => (
          <span key={idx}>❤️</span>
        ))}
      </div>
    </div>
  );
};

export default PBTIPerfumeType;
