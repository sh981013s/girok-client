import client from './client.ts';
import {
  SignInReq,
  SignInRes,
  SignUpReq,
  SignUpValidationReq,
} from '../grTypes/user/external/externalUserTypes.ts';

export const postRegister = (payload: SignUpReq) => {
  return client.post('auth/register', payload);
};

export const postRegisterVerification = (payload: SignUpValidationReq) => {
  return client.post('auth/verifications', payload);
};

export const postSignIn = (payload: SignInReq) => {
  return client.post<SignInRes>('auth/login', payload);
};
