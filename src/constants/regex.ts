export const USER_REGEX = {
  EMAIL:
    /^[a-zA-Z0-9._+-]+(?<!\.\.\.\.\.\.\.)@[a-zA-Z0-9-]+(?<![-.])\.[a-zA-Z]{2,10}$/,
  PASSWORD: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).+$/,
  VERIFICATION_CODE: /[A-Z0-9]{6}/,
};
