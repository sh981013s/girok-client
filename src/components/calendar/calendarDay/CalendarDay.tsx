import * as S from './CalendarDay.styles.ts';

type CalenderDayProps = {
  date: Date;
};

const CalendarDay = ({ date }: CalenderDayProps) => {
  const day = date.getDate();

  return <S.DayContainer>{day}</S.DayContainer>;
};

export default CalendarDay;
