import { useSignIn } from '../../hooks/queryHooks/userQueries.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterData } from '../../grTypes/user/internal/internalUserTypes.ts';
import { USER_REGEX } from '../../constants/regex.ts';

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ mode: 'onBlur' });

  const { signIn } = useSignIn();

  const signInHandler: SubmitHandler<RegisterData> = (data) => {
    const { email, password } = data;

    signIn({ email, password });
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <form onSubmit={handleSubmit(signInHandler)}>
        <input
          type='email'
          {...register('email', {
            required: true,
            pattern: USER_REGEX.EMAIL,
          })}
        />
        {errors.email && <p>Invalid email format.</p>}
        <input
          type='password'
          {...register('password', { required: true, pattern: USER_REGEX.PASSWORD })}
        />
        {errors.password && (
          <p>Password must include an uppercase letter and a special character.</p>
        )}
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
