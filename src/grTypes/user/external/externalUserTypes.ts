import { Dispatch, SetStateAction } from 'react';

export type SignUpReq = {
  email: string;
  password: string;
};

export type SignUpValidationReq = {
  email: string;
  verification_code: string;
};

export type UseRegisterPrams = {
  setIsValidationEmail: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
};

export type SignInReq = FormData;
