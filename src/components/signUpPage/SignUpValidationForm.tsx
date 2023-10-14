import { USER_REGEX } from '../../constants/regex.ts';
import { useValidateRegisterCode } from '../../hooks/queryHooks/userQueries.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { VerificationData } from '../../grTypes/user/internal/internalUserTypes.ts';

type SignUpValidationFormProps = {
  email: string;
};
const SignUpValidationForm = ({ email }: SignUpValidationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationData>({ mode: 'onBlur' });

  const { submitVerificationCode } = useValidateRegisterCode();

  const submitRegisterBtnHandler: SubmitHandler<VerificationData> = (data) => {
    const { verificationCode } = data;
    submitVerificationCode({ email, verification_code: verificationCode });
  };

  return (
    <div>
      <h1>Verification code has been sent to your email!</h1>
      <span>Enter your validation code</span>
      <form onSubmit={handleSubmit(submitRegisterBtnHandler)}>
        <input
          type='number'
          {...register('verificationCode', {
            required: true,
            pattern: USER_REGEX.VERIFICATION_CODE,
          })}
        />
        {errors.verificationCode && <p>Invalid verification code.</p>}
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default SignUpValidationForm;
