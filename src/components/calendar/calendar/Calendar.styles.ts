import styled from 'styled-components';

export const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f3f4f6;
`;

export const Weekday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  font-weight: bold;

  background-color: #f3f4f6;
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  width: 100%;

  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
`;
