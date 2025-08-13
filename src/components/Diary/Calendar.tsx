import Calendar from "react-calendar";
import moment from "moment";
import CalendarDiary from "./CalendarDiary";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar-custom.css";
import { axiosInstance } from "../../apis/axios"; 

export default function DiaryCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [markedDates, setMarkedDates] = useState<Set<string>>(new Set());
  const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());

  const hasDiary = (date: Date) => {
    const dateKey = moment(date).format("YYYY-MM-DD");
    return markedDates.has(dateKey);
  };

  useEffect(() => {
    const fetchMonthly = async () => {
      try {
        const year = activeStartDate.getFullYear();
        const month = activeStartDate.getMonth() + 1; 

        const { data } = await axiosInstance.get(
          `/diary/monthly/${year}/${month}`
        );
        console.log("월별 다이어리 조회 응답:", data);

        if (data?.isSuccess && Array.isArray(data?.result)) {
          const next = new Set<string>();
          for (const item of data.result) {
            const d = moment(item?.date).format("YYYY-MM-DD");
            if (d) next.add(d);
          }
          setMarkedDates(next);
        } else {
          setMarkedDates(new Set());
        }
      } catch (err) {
        setMarkedDates(new Set());
      }
    };

    fetchMonthly();
  }, [activeStartDate]);

return (
  <div className="min-w-[375px] w-full max-w-[480px] mx-auto bg-main-500 h-dvh flex flex-col overflow-hidden">
    <div className="basis-[50%] flex-none bg-main-500">
      <div className="h-full">
        <Calendar
          onClickDay={setSelectedDate}
          value={selectedDate}
          locale="ko-KR"
          calendarType="iso8601"
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
          prev2Label={null}
          next2Label={null}
          className="h-full"
          navigationLabel={({ date }) => (
            <div className="text-white text-center text-lg font-bold">
              {moment(date).format("YYYY.MM")}
            </div>
          )}
          onActiveStartDateChange={({ activeStartDate }) => {
            if (activeStartDate) setActiveStartDate(activeStartDate);
          }}
          tileClassName={({ date, view }) =>
            view === "month" && hasDiary(date) ? "has-diary" : ""
          }
        />
      </div>
    </div>

    <div className="basis-[50%] flex-none bg-white overflow-y-auto hide-scrollbar  rounded-t-3xl p-4 pb-24">
      <CalendarDiary selectedDate={selectedDate} diaryData={{}} />
    </div>
  </div>
);
}