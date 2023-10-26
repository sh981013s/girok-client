import * as S from './CalenderDay.styles.ts';

type CalenderDayProps = {
  date: Date;
};

const CalenderDay = ({ date }: CalenderDayProps) => {
  const day = date.getDate();

  return <S.DayContainer>{day}</S.DayContainer>;
};

export default CalenderDay;
