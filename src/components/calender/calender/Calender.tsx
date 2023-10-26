import * as S from './Calender.styles.ts';

import getCalenderDates from '@/utils/calenderUtils/getCalenderDates.ts';
import CalenderDay from '@/components/calender/calenderDay/CalenderDay.tsx';

const Calender = () => {
  const selectedDate = new Date();
  const dates = getCalenderDates(selectedDate);

  return (
    <S.CalenderContainer>
      {dates.map((date, idx) => (
        <CalenderDay key={idx} date={date} />
      ))}
    </S.CalenderContainer>
  );
};

export default Calender;
