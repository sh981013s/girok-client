import { Dispatch, SetStateAction } from 'react';

type UserBase = {
  email: string;
  password: string;
};

export type SignUpReq = UserBase;

export type SignUpValidationReq = {
  email: string;
  verification_code: string;
};

export type UseRegisterPrams = {
  setIsValidationEmail: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
};

export type SignInReq = UserBase;
