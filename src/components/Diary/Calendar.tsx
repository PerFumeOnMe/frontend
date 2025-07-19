import Calendar from "react-calendar";
import moment from "moment";

export default function DiaryCalendar() {
  return(
    <div className="min-w-[375px] w-120">
      <div className="w-full flex items-center justify-center">
        <Calendar 
            formatMonthYear={(locale, date) => moment(date).format("YYYY.MM")}
            formatDay={(locale, date) => moment(date).format("D")}
            showNeighboringMonth={false}
            prev2Label={null}
            next2Label={null}  />
        </div>
    </div>
    );
}