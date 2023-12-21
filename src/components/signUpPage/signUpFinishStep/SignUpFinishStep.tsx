import { useNavigate } from 'react-router-dom';

import * as S from './SignUpFinishStep.styles.tsx';

import AuthButton from '@/components/_common/authButton/AuthButton.tsx';
import ROUTES from '@/constants/routes.ts';

const SignUpFinishStep = () => {
  const navigate = useNavigate();

  const finishSignUpBtnHandler = () => {
    navigate(ROUTES.SIGN_IN);
  };
  return (
    <>
      <S.AuthMainText>Sign up complete!</S.AuthMainText>
      <S.AuthSubText>Welcome.</S.AuthSubText>

      <AuthButton
        onClickFunc={finishSignUpBtnHandler}
        text='Start girok()'
      />
    </>
  );
};

export default SignUpFinishStep;
