export const USER_REGEX = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).+$/,
  VERIFICATION_CODE: /^[0-9][A-Z][0-9][0-9][A-Z][0-9]$/,
};
