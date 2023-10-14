import { useMutation } from '@tanstack/react-query';
import { postRegister, postRegisterVerification, postSignIn } from '../../apis/user.ts';

import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes.ts';
import {
  SignInReq,
  SignUpReq,
  SignUpValidationReq,
  UseRegisterPrams,
} from '../../grTypes/user/external/externalUserTypes.ts';
import { setCookie } from '../../utils/cookie.ts';

export const useSignUp = ({ setIsValidationEmail, setEmail }: UseRegisterPrams) => {
  const { mutate } = useMutation((payload: SignUpReq) => postRegister(payload), {
    onSuccess: (_, variables) => {
      setIsValidationEmail(true);
      setEmail(variables.email);
    },
  });

  return {
    register: mutate,
  };
};

export const useValidateRegisterCode = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    (payload: SignUpValidationReq) => postRegisterVerification(payload),
    {
      onSuccess() {
        alert('successfully created your account');
        navigate(ROUTES.SIGN_IN);
      },
    },
  );

  return {
    submitVerificationCode: mutate,
  };
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation((payload: SignInReq) => postSignIn(payload), {
    onSuccess(response) {
      const { access_token, refresh_token } = response.data;
      setCookie('access_token', access_token);
      setCookie('refresh_token', refresh_token);
      alert('successfully signed in');
      navigate(ROUTES.MAIN_PAGE);
    },
  });

  return {
    signIn: mutate,
  };
};
