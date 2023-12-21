import { styled } from 'styled-components';

export const AuthButton = styled.button`
  ${({ theme }) => theme.fonts.body1};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3.5rem;
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.authInput}px;

  &:disabled {
    cursor: not-allowed;
  }
`;
