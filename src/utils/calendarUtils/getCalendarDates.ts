/**
 * Generates an array of Date objects to fill a calendar view for a given month.
 * The array starts from the nearest preceding Sunday of the month's first day
 * and ends at the nearest following Saturday of the month's last day.
 *
 * @param {Date} selectedDate - A Date object representing any day within the month
 *                              for which the calendar dates are to be generated.
 * @returns {Date[]} - An array of Date objects to populate the calendar for the month.
 *
 * @example
 * const myDate = new Date(2023, 9, 26); // October 26, 2023
 * const calendarDates = getCalendarDates(myDate);
 * console.log(calendarDates);  // Should output an array of Date objects for the calendar month
 */
const getCalendarDates = (selectedDate: Date): Date[] => {
  const monthStart = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  const monthEnd = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

  const startDate = new Date(monthStart);
  startDate.setDate(startDate.getDate() - monthStart.getDay());
  const endDate = new Date(monthEnd);
  endDate.setDate(endDate.getDate() + (6 - monthEnd.getDay()));

  const datesArray: Date[] = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    datesArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return datesArray;
};

export default getCalendarDates;
