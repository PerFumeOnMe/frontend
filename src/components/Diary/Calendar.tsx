import Calendar from "react-calendar";
import moment from "moment";
import CalendarDiary from "./CalendarDiary";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState } from "react";

export default function DiaryCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="min-w-[375px] w-120 mx-auto bg-main-500 h-screen flex flex-col">
      {/* 달력 영역 */}
      <div className="flex-[0.71] bg-main-500 ">
        <Calendar
          onClickDay={(date) => setSelectedDate(date)}
          value={selectedDate}
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
          prevLabel={null}
          nextLabel={null}
          prev2Label={null}
          next2Label={null}
          className="text-white px-4 py-6"
          navigationLabel={({ date }) => (
            <div className="relative flex items-center justify-center w-full">
              {/* 왼쪽 화살표 (button → div로 변경) */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => console.log("prev month")}
                className="absolute left-0 text-white text-2xl cursor-pointer"
              >
                <IoChevronBack />
              </div>

              {/* 중앙 년월 */}
              <span className="text-white text-title2">
                {moment(date).format("YYYY.MM")}
              </span>

              {/* 오른쪽 화살표 */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => console.log("next month")}
                className="absolute right-0 text-white text-2xl cursor-pointer"
              >
                <IoChevronForward />
              </div>
            </div>
          )}
        />
      </div>

      {/* 달력 아래 컨텐츠 영역 */}
      <div className="bg-white flex-[0.29] overflow-y-auto rounded-t-3xl p-4">
        <CalendarDiary selectedDate={selectedDate} />
      </div>
    </div>
  );
}
