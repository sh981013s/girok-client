import { MONTHS } from '@/constants/calendarConstants.ts';

/**
 * Returns the month name for a given Date object.
 *
 * @param {Date} date - The Date object for which the month name needs to be retrieved.
 * @return {string} - The name of the month corresponding to the Date object.
 *
 * @example
 * const myDate = new Date(2023, 9, 26); // October 26, 2023
 * const monthName = getMonthName(myDate); // "October"
 */
const getMonthName = (date: Date) => {
  return MONTHS[date.getMonth()];
};

export default getMonthName;
