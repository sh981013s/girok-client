import font from '@/styles/font.ts';

const theme = {
  colors: {
    darkGray: '#131313',
    red: '#D42727',
    gray0: '#F8F8F8',
    gray1: '#F1F1F1',
    gray2: '#CFCFCF',
    gray3: '#959595',
    gray4: '#686868',
    gray5: '#595959',
    white: '#FFFFFF',
    black: '#000000',
  },

  fonts: {
    headline1: font({ size: 2, weight: 500, spacing: -0.02 }),
    body1: font({ size: 1, weight: 500, spacing: -0.01 }),
    body2: font({ size: 1, weight: 400, spacing: -0.01 }),
    smallBody1: font({ size: 0.875, weight: 400, spacing: -0.01 }),
  },

  shadows: {
    middleBox:
      '0rem 0.4rem 2.7rem rgba(0, 0, 0, 0.07), 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.07)',
  },

  borderRadius: {
    authInput: 2.5,
  },
} as const;

export default theme;
