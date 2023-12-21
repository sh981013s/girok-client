import { useForm } from 'react-hook-form';

import * as S from './SignUpVerCodeStep.styles.tsx';

import { VerCodeFunnelData } from '@/grTypes/user/internal/internalUserTypes.ts';
import { USER_REGEX } from '@/constants/regex.ts';
import AuthButton from '@/components/_common/authButton/AuthButton.tsx';

type SignUpVerCodeStepProps = {
  submitHandler: (data: VerCodeFunnelData) => void;
};

const SignUpVerCodeStep = ({
  submitHandler,
}: SignUpVerCodeStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerCodeFunnelData>({ mode: 'onChange' });

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <S.AuthMainText>Sign Up</S.AuthMainText>
      <S.AuthSubText>Check your mailbox.</S.AuthSubText>
      <S.AuthInput
        placeholder='Verification code'
        {...register('verification_code', {
          required: true,
          pattern: {
            value: USER_REGEX.VERIFICATION_CODE,
            message: 'Invalid verification code format.',
          },
          maxLength: {
            value: 6,
            message:
              'Verification code must be exactly 6 characters.',
          },
        })}
      />

      <S.AuthInputErrorText>
        {errors.verification_code
          ? errors.verification_code.message
          : '\u00A0'}
      </S.AuthInputErrorText>
      <AuthButton isDisabled={hasErrors} text='Next' />
    </form>
  );
};

export default SignUpVerCodeStep;
