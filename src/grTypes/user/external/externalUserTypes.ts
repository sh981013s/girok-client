import { Dispatch, SetStateAction } from 'react';

type UserEmail = string;

type UserBase = {
  email: UserEmail;
  password: string;
};

export type EmailReq = {
  email: UserEmail;
};

export type VerCodeReq = {
  email: UserEmail;
  verification_code: string;
};

export type SignUpReq = VerCodeReq & {
  password: string;
};

export type SignUpValidationReq = {
  email: UserEmail;
  verification_code: string;
};

export type UseRegisterPrams = {
  setIsValidationEmail: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
};

export type SignInReq = UserBase;

export type SignInRes = {
  access_token: string;
  refresh_token: string;
};
