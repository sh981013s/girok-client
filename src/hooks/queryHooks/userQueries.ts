import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import {
  postCheckVerCode,
  postRegister,
  postRegisterVerification,
  postSendVerificationCode,
  postSignIn,
  postSignUp,
} from '@/apis/user.ts';
import {
  EmailReq,
  SignInReq,
  SignUpReq,
  SignUpValidationReq,
  UseRegisterPrams,
  VerCodeReq,
} from '@/grTypes/user/external/externalUserTypes.ts';
import ROUTES from '@/constants/routes.ts';

export const useSendEmailVerificationCode = (
  onSuccessFn: () => void,
) => {
  const { mutate } = useMutation(
    (payload: EmailReq) => postSendVerificationCode(payload),
    {
      onSuccess() {
        onSuccessFn();
      },
    },
  );

  return {
    sendVerCode: mutate,
  };
};

export const useCheckVerificationCode = (onSuccessFn: () => void) => {
  const { mutate } = useMutation(
    (payload: VerCodeReq) => postCheckVerCode(payload),
    {
      onSuccess() {
        onSuccessFn();
      },
    },
  );

  return {
    checkVerCode: mutate,
  };
};

export const useSignUp = (onSuccessFn: () => void) => {
  const { mutate } = useMutation(
    (payload: SignUpReq) => postSignUp(payload),
    {
      onSuccess() {
        onSuccessFn();
      },
    },
  );

  return {
    signUp: mutate,
  };
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    (payload: SignInReq) => postSignIn(payload),
    {
      onSuccess() {
        alert('successfully signed in');
        navigate(ROUTES.MAIN_PAGE);
      },
    },
  );

  return {
    signIn: mutate,
  };
};
