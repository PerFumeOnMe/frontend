type PBTIInfoCardProps = {
    info: string;
};

const PBTIInfoCard = ({ info }: PBTIInfoCardProps) => {
    return(
    <div className="max-w-60 rounded-2xl px-4 py-4 bg-[#FBFBFB66] shadow-sm text-center text-sm text-grayscale-900 font-[400] bg-[#FBFBFB66] whitespace-pre-line">
        {info}
    </div>
    );
};

export default PBTIInfoCard