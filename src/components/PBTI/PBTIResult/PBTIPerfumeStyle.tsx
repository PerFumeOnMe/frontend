type PBTIPerfumeStyleProps = {
  note: string;
  description: string;
};

const PBTIPerfumeStyle: React.FC<PBTIPerfumeStyleProps> = ({ note, description }) => {
  return (
    <div className="flex gap-2 tracking-tighter text-body3">
      <div className="font-[500]">{note}</div>
      <div className="font-[400]">{description}</div>
    </div>
  );
};

export default PBTIPerfumeStyle;
