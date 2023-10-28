import styled from 'styled-components';

export const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin: 0;

  border-bottom: 1px solid #ccc;

  &:nth-child(7n + 2),
  &:nth-child(7n + 3),
  &:nth-child(7n + 4),
  &:nth-child(7n + 5),
  &:nth-child(7n + 6),
  &:nth-child(7n + 7) {
    border-left: 1px dashed #ccc;
  }

  &:nth-child(-n + 7) {
    border-top: 1px solid #ccc;
  }
`;
