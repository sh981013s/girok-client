import { useState } from 'react';
import { useSignIn } from '../../hooks/queryHooks/userQueries.ts';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useSignIn();

  const signInBtnHandler = () => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    signIn(formData);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <div>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signInBtnHandler}>Sign In</button>
      </div>
    </div>
  );
};

export default SignInPage;
