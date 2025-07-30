const ButtonSection = () => {
  return (
    <div className="flex gap-6 w-full">
      <button className="flex-1 h-12 bg-white rounded-2xl text-main-500 border-main-500">
        저장하기
      </button>
      <button className="flex-1 bg-amber-50">홈으로</button>
    </div>
  );
};

export default ButtonSection;
