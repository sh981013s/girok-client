import { styled } from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 93vh;
`;

export const MiddleCard = styled.div`
  width: 30rem;
  height: 35rem;
  padding: 8rem 3.5rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.middleBox};
`;

export const Desc = styled.p`
  ${({ theme }) => theme.fonts.body2};
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.colors.gray3};
  text-align: center;
`;

export const SignInHighlight = styled.span`
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
