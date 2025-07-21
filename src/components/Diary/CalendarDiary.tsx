import moment from "moment";
import "moment/dist/locale/ko"; 
import { IoAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; 

moment.locale("ko");

interface CalendarDiaryProps {
  selectedDate: Date;
}
export default function CalendarDiary({ selectedDate }: CalendarDiaryProps) {
    const navigate = useNavigate();
  const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
  //우선 빈배열로
  const diaryList: string[] = [];

    const handleAddDiary = () => {
    // 새로운 페이지로 이동
    navigate("/diary/new"); 
  };

  return(
    <div className="w-full mx-auto bg-white">
      {/* 선택한 날짜 표시 */}
      <p className="text-title3 text-grayscale-1000 mb-2">
        {moment(selectedDate).format("YYYY년 M월 D일 (dddd)")}
      </p>

      {/* 일기 리스트 */}
      {diaryList.map((diary, idx) => (
        <div key={idx} className="bg-main-10 rounded-lg">
          <p className="text-body4">{diary}</p>
        </div>
      ))}

      {/* 일기 추가 버튼 */}
      <button 
      onClick={handleAddDiary} 
      className="w-full mt-2.5 py-7.5 pl-4 border border-main-500 rounded-lg text-body3 text-grayscale-800 flex items-center justify-between">
        향수 일기를 작성해 주세요!
        <IoAdd className="text-main-500 mr-8" />
      </button>
    </div>
  );
}