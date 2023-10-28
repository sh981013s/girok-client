// needed

// handleMonthChange
// month name
// year
// dates

import { MouseEvent, useState } from 'react';

import { MONTH_DIR } from '@/grTypes/calendar/internal/internalCalndarTypes.ts';
import getCalenderDates from '@/utils/calendarUtils/getCalendarDates.ts';
import getMonthName from '@/utils/calendarUtils/getMonthName.ts';

const useCalendar = () => {
  const [selectedDate, setSelectedState] = useState(new Date());
  const dates = getCalenderDates(selectedDate);
  const monthName = getMonthName(selectedDate);
  const year = selectedDate.getFullYear();

  const moveMonth = (dir: MONTH_DIR) => {
    const newDate =
      dir === 'current'
        ? new Date()
        : new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth() + (dir === 'next' ? 1 : -1),
          );

    setSelectedState(newDate);
  };
  const handleMonthChange = (e: MouseEvent<HTMLButtonElement>) => {
    const direction = e.currentTarget.getAttribute(
      'data-direction',
    ) as MONTH_DIR;

    if (direction) moveMonth(direction);
  };

  return {
    dates,
    monthName,
    year,
    handleMonthChange,
  };
};

export default useCalendar;
