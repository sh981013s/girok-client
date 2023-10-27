import * as S from './Calendar.styles.ts';

import CalendarDay from '@/components/calendar/calendarDay/CalendarDay.tsx';
import { WEEKDAYS } from '@/constants/calendarConstants.ts';
import useCalendar from '@/hooks/calendarHooks/useCalendar.ts';

const Calendar = () => {
  const { dates, monthName, year, handleMonthChange } = useCalendar();

  return (
    <div>
      <div>
        <div>
          <span>{monthName}, </span>
          <span>{year}</span>
        </div>
        <div>
          <button data-direction='prev' onClick={handleMonthChange}>
            {'<='}
          </button>
          <button
            data-direction='current'
            onClick={handleMonthChange}
          >
            O
          </button>
          <button data-direction='next' onClick={handleMonthChange}>
            {'=>'}
          </button>
        </div>
      </div>

      <S.WeekdayHeader>
        {WEEKDAYS.map((day, idx) => (
          <S.Weekday key={idx}>{day}</S.Weekday>
        ))}
      </S.WeekdayHeader>

      <S.CalendarContainer>
        {dates.map((date, idx) => (
          <CalendarDay key={idx} date={date} />
        ))}
      </S.CalendarContainer>
    </div>
  );
};

export default Calendar;
