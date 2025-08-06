type PBTIPerfumeStyleProps = {
  note: string;
  description: string;
};

const PBTIPerfumeStyle: React.FC<PBTIPerfumeStyleProps> = ({ note, description }) => {
  return (
    <div className="flex gap-2 tracking-tighter text-body3">
      <div className="text-body3 font-[500] text-grayscale-900">{note}</div>
      <div className="text-body3 text-grayscale-800">{description}</div>
    </div>
  );
};

export default PBTIPerfumeStyle;
