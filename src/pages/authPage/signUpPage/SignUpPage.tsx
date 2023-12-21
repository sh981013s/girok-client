import { useState } from 'react';

import useFunnel from '@/hooks/commonHooks/useFunnel.ts';
import {
  EmailFunnelData,
  PasswordFunnelData,
  VerCodeFunnelData,
} from '@/grTypes/user/internal/internalUserTypes.ts';
import SignUpEmailStep from '@/components/signUpPage/signUpEmailStep/SignUpEmailStep.tsx';
import {
  useCheckVerificationCode,
  useSendEmailVerificationCode,
  useSignUp,
} from '@/hooks/queryHooks/userQueries.ts';
import SignUpVerCodeStep from '@/components/signUpPage/signUpVerCodeStep/SignUpVerCodeStep.tsx';
import SignUpPasswordStep from '@/components/signUpPage/signUpPasswordStep/SignUpPasswordStep.tsx';
import SignUpFinishStep from '@/components/signUpPage/signUpFinishStep/SignUpFinishStep.tsx';

const SignUpPage = () => {
  const { funnelStep, goToNextStep } = useFunnel({
    stepLength: 4,
  });
  const [valCode, setValCode] = useState('');
  const [email, setEmail] = useState('');
  const { sendVerCode } = useSendEmailVerificationCode(goToNextStep);
  const { checkVerCode } = useCheckVerificationCode(goToNextStep);
  const { signUp } = useSignUp(goToNextStep);

  const onSubmitEmailFunnel = ({ email }: EmailFunnelData) => {
    sendVerCode({ email });
    setEmail(email);
  };

  const onSubmitVerCodeFunnel = ({
    verification_code,
  }: VerCodeFunnelData) => {
    checkVerCode({ email, verification_code });
    setValCode(verification_code);
  };

  const onSubmitPasswordFunnel = ({
    password,
  }: PasswordFunnelData) => {
    signUp({ password, verification_code: valCode, email });
  };

  return (
    <div>
      {funnelStep === 0 && (
        <SignUpEmailStep submitHandler={onSubmitEmailFunnel} />
      )}

      {funnelStep === 1 && (
        <SignUpVerCodeStep submitHandler={onSubmitVerCodeFunnel} />
      )}

      {funnelStep === 2 && (
        <SignUpPasswordStep submitHandler={onSubmitPasswordFunnel} />
      )}

      {funnelStep === 3 && <SignUpFinishStep />}
    </div>
  );
};

export default SignUpPage;
