import {
  EmailReq,
  SignInReq,
  SignInRes,
  SignUpReq,
  SignUpValidationReq,
  VerCodeReq,
} from '../grTypes/user/external/externalUserTypes.ts';

import client from './client.ts';

export const postRegister = (payload: SignUpReq) => {
  return client.post('auth/register', payload);
};

export const postRegisterVerification = (
  payload: SignUpValidationReq,
) => {
  return client.post('auth/verifications', payload);
};

export const postSignIn = (payload: SignInReq) => {
  return client.post<SignInRes>('auth/login', payload);
};

export const postSendVerificationCode = (payload: EmailReq) => {
  return client.post('auth/emailVerification', payload);
};

export const postCheckVerCode = (payload: VerCodeReq) => {
  return client.post('auth/emailVerificationCheck', payload);
};

export const postSignUp = (payload: SignUpReq) => {
  return client.post('auth/signup', payload);
};
