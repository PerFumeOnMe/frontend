import moment from "moment";
import "moment/dist/locale/ko";
import { IoAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/axios"; 
moment.locale("ko");

interface CalendarDiaryProps {
  selectedDate: Date;
  diaryData: { [key: string]: any[] };
}

export default function CalendarDiary({ selectedDate, diaryData }: CalendarDiaryProps) {
  const navigate = useNavigate();
  const dateKey = moment(selectedDate).format("YYYY-MM-DD");

  const [diaryList, setDiaryList] = useState<any[]>([]);

  const handleAddDiary = () => {
    navigate(`/diary/new?date=${dateKey}`);
  };


  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const { data } = await axiosInstance.get(`/diary/daily/${dateKey}`);
        console.log("일별 조회 응답:", data);

        if (!alive) return;

        const payload = data?.result;
        const list = Array.isArray(payload) ? payload : payload ? [payload] : [];
        const normalized = list.map((d: any) => ({
          fragranceName: d?.fragranceName ?? d?.name ?? "",
          content: d?.content ?? d?.text ?? "",
        }));
        setDiaryList(normalized.filter(d => d.fragranceName || d.content));
      } catch (e) {
        setDiaryList([]);
      }
    })();
    return () => { alive = false; };
  }, [dateKey]);

  return (
    <div className="w-full mx-auto bg-white">
      {/* 선택한 날짜 */}
      <p className="text-title3 text-grayscale-1000 mb-2">
        {moment(selectedDate).format("YYYY년 M월 D일 (dddd)")}
      </p>

      {/* 일기 리스트 */}
      {diaryList.length > 0 &&
        diaryList.map((diary, idx) => (
          <div
            key={idx}
            className="bg-main-10 rounded-lg h-20 px-4 flex flex-col justify-center my-3"
          >
            <p className="text-body3 text-grayscale-1000">{diary.fragranceName}</p>
            <p className="text-body4 text-grayscale-1000 mt-1">{diary.content}</p>
          </div>
        ))}

      <button
        onClick={handleAddDiary}
        className="w-full h-20 px-4 border border-main-500 rounded-lg text-body3 text-grayscale-800 flex items-center justify-between"
      >
        향수 일기를 작성해 주세요!
        <IoAdd className="text-main-500 mr-8 text-2xl" />
      </button>
    </div>
  );
}
