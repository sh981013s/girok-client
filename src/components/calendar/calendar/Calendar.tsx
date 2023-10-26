import * as S from './Calendar.styles.ts';

import getCalenderDates from '@/utils/calendarUtils/getCalendarDates.ts';
import CalendarDay from '@/components/calendar/calendarDay/CalendarDay.tsx';

const Calendar = () => {
  const selectedDate = new Date();
  const dates = getCalenderDates(selectedDate);

  return (
    <S.CalendarContainer>
      {dates.map((date, idx) => (
        <CalendarDay key={idx} date={date} />
      ))}
    </S.CalendarContainer>
  );
};

export default Calendar;
