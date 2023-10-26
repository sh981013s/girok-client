import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  width: 30rem;

  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
`;
