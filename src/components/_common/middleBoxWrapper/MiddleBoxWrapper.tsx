import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MiddleBoxWrapper.styles.tsx';

import ROUTES from '@/constants/routes.ts';

interface MiddleBoxWrapperProps {
  isSignUp: boolean;
}

const SignInBtnText = () => {
  const navigate = useNavigate();

  return (
    <S.Desc>
      Already have an account?{' '}
      <S.SignInHighlight onClick={() => navigate(ROUTES.SIGN_IN)}>
        Sign in
      </S.SignInHighlight>
    </S.Desc>
  );
};

const SignUpBtnText = () => {
  const navigate = useNavigate();

  return (
    <S.Desc>
      No account?{' '}
      <S.SignInHighlight onClick={() => navigate(ROUTES.SIGN_UP)}>
        Create one
      </S.SignInHighlight>
    </S.Desc>
  );
};

const MiddleBoxWrapper = ({
  children,
  isSignUp,
}: PropsWithChildren<MiddleBoxWrapperProps>) => {
  return (
    <S.PageContainer>
      <div>
        <S.MiddleCard>{children}</S.MiddleCard>
        {isSignUp ? <SignInBtnText /> : <SignUpBtnText />}
      </div>
    </S.PageContainer>
  );
};

export default MiddleBoxWrapper;
