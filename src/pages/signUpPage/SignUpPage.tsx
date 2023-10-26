import { useState } from 'react';

import SignUpValidationForm from '@/components/signUpPage/SignUpValidationForm.tsx';
import SignUpEmailPasswordForm from '@/components/signUpPage/SignUpEmailPasswordForm.tsx';

const SignUpPage = () => {
  const [isValCodeSent, setIsValCodeSent] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      <h1>SignUp Page</h1>
      <div>
        {isValCodeSent && <SignUpValidationForm email={email} />}
        {!isValCodeSent && (
          <SignUpEmailPasswordForm
            setIsValCodeSent={setIsValCodeSent}
            setEmail={setEmail}
          />
        )}
      </div>
    </>
  );
};

export default SignUpPage;
