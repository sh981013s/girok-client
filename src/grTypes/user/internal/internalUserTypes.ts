export type EmailFunnelData = {
  email: string;
};

export type VerCodeFunnelData = {
  verification_code: string;
};

export type PasswordFunnelData = {
  password: string;
  confirmPassword?: string;
};

export type RegisterData = {
  email: string;
  password: string;
};

export type VerificationData = {
  verificationCode: string;
};
