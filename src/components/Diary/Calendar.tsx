import Calendar from "react-calendar";
import moment from "moment";
import CalendarDiary from "./CalendarDiary";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar-custom.css";

export default function DiaryCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [diaryData, setDiaryData] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const saved = JSON.parse(sessionStorage.getItem("diaryData") || "{}");
    setDiaryData(saved);
  }, []);

  const hasDiary = (date: Date) => {
    const dateKey = moment(date).format("YYYY-MM-DD");
    return !!diaryData[dateKey];
  };

  return (
    <div className="min-w-[375px] w-full max-w-[480px] mx-auto bg-main-500 h-screen flex flex-col">
      {/* 달력 영역 */}
      <div className="flex-[0.55] bg-main-500">
        <Calendar
          onClickDay={setSelectedDate}
          value={selectedDate}
          locale="ko-KR"
          calendarType="iso8601"
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
          prev2Label={null}
          next2Label={null}
          navigationLabel={({ date }) => (
            <div className="text-white text-center text-lg font-bold">
              {moment(date).format("YYYY.MM")}
            </div>
          )}
          tileClassName={({ date, view }) => {
            if (view === "month" && hasDiary(date)) {
              return "has-diary";
            }
            return "";
          }}
        />
      </div>

      {/* 달력 아래 컨텐츠 */}
      <div className="bg-white flex-[0.45] overflow-y-auto rounded-t-3xl p-4">
        <CalendarDiary selectedDate={selectedDate} diaryData={diaryData} />
      </div>
    </div>
  );
}
