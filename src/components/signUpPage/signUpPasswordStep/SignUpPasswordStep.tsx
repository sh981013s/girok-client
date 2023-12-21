import { useForm } from 'react-hook-form';

import * as S from './SignUpPasswordStep.tsx.styles.tsx';

import { PasswordFunnelData } from '@/grTypes/user/internal/internalUserTypes.ts';
import { USER_REGEX } from '@/constants/regex.ts';
import AuthButton from '@/components/_common/authButton/AuthButton.tsx';

type SignUpVerCodeStepProps = {
  submitHandler: (data: PasswordFunnelData) => void;
};

const SignUpPasswordStep = ({
  submitHandler,
}: SignUpVerCodeStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PasswordFunnelData>({ mode: 'onChange' });

  const password = watch('password');
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <S.AuthMainText>Sign Up</S.AuthMainText>
      <S.AuthSubText>Set your password.</S.AuthSubText>
      <S.AuthInput
        placeholder='Password'
        type='password'
        {...register('password', {
          required: 'Password is required',
          pattern: {
            value: USER_REGEX.PASSWORD,
            message: 'Invalid password format.',
          },
        })}
      />

      <S.AuthInput
        placeholder='Confirm Password'
        type='password'
        {...register('confirmPassword', {
          required: 'Confirm Password is required',
          validate: (value) =>
            value === password || 'The passwords do not match.',
        })}
      />

      {/* Error Message for Password */}
      <S.AuthInputErrorText>
        {errors.password && errors.password.message}
      </S.AuthInputErrorText>

      {/* Error Message for Confirm Password */}
      <S.AuthInputErrorText>
        {errors.confirmPassword && errors.confirmPassword.message}
      </S.AuthInputErrorText>

      <AuthButton isDisabled={hasErrors} text='Sign up' />
    </form>
  );
};

export default SignUpPasswordStep;
