import { USER_REGEX } from '../../constants/regex.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignUp } from '../../hooks/queryHooks/userQueries.ts';
import { Dispatch, SetStateAction } from 'react';
import { RegisterData } from '../../grTypes/user/internal/internalUserTypes.ts';

type SignUpEmailPasswordFormProps = {
  setIsValCodeSent: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
};

const SignUpEmailPasswordForm = ({
  setIsValCodeSent,
  setEmail,
}: SignUpEmailPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ mode: 'onBlur' });

  const { register: signUp } = useSignUp({
    setIsValidationEmail: setIsValCodeSent,
    setEmail: setEmail,
  });

  const registerBtnHandler: SubmitHandler<RegisterData> = (data) => {
    const { email, password } = data;
    signUp({ email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(registerBtnHandler)}>
        <input
          type='email'
          {...register('email', { required: true, pattern: USER_REGEX.EMAIL })}
        />
        {errors.email && <p>Invalid email format.</p>}
        <input
          type='password'
          {...register('password', { required: true, pattern: USER_REGEX.PASSWORD })}
        />
        {errors.password && (
          <p>Password must include an uppercase letter and a special character.</p>
        )}
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default SignUpEmailPasswordForm;
