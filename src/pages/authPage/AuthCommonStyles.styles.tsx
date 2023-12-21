import { styled } from 'styled-components';

export const AuthMainText = styled.h1`
  ${({ theme }) => theme.fonts.headline1};
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const AuthSubText = styled.p`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.gray3};
  text-align: center;
  margin-bottom: 2rem;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.authInput}px;
`;

export const AuthInputErrorText = styled.span`
  ${({ theme }) => theme.fonts.body2};
  display: block;
  height: 2rem;
  margin-bottom: 1.94rem;
  color: ${({ theme }) => theme.colors.red};
`;

export const subFunctionText = styled.a`
  ${({ theme }) => theme.fonts.body2};
  cursor: pointer;
`;
