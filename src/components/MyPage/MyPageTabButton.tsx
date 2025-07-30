interface MyPageTabButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const MyPageTabButton: React.FC<MyPageTabButtonProps> = ({ label, selected, onClick }) => {
  return (
    <button onClick={onClick} className="">
      <div
        className={`text-title4 p-2 border-b-2 text-center transition-colors duration-150 ${
          selected
            ? "text-main-500 border-main-500"
            : "text-grayscale-600 border-grayscale-300"
        }`}
      >
        {label}
      </div>
    </button>
  );
};

export default MyPageTabButton;
