import { useForm } from 'react-hook-form';

import * as S from './SignUpEmailStep.styles.tsx';

import { EmailFunnelData } from '@/grTypes/user/internal/internalUserTypes.ts';
import { USER_REGEX } from '@/constants/regex.ts';
import AuthButton from '@/components/_common/authButton/AuthButton.tsx';

type SignUpEmailStepProps = {
  submitHandler: (data: EmailFunnelData) => void;
};

const SignUpEmailStep = ({ submitHandler }: SignUpEmailStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFunnelData>({ mode: 'onChange' });

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <S.AuthMainText>Sign Up</S.AuthMainText>
      <S.AuthSubText>
        Enter your Email. We will send you verification code.
      </S.AuthSubText>
      <S.AuthInput
        type='email'
        placeholder='Email'
        {...register('email', {
          required: true,
          pattern: USER_REGEX.EMAIL,
        })}
      />

      <S.AuthInputErrorText>
        {errors.email ? 'Invalid email format.' : '\u00A0'}
      </S.AuthInputErrorText>
      <AuthButton
        isDisabled={hasErrors}
        text='Send authentication number'
      />
    </form>
  );
};

export default SignUpEmailStep;
