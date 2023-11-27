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
    headline1: font({ size: 3.2, weight: 500, spacing: -2 }),
    body1: font({ size: 1.6, weight: 500, spacing: -1 }),
    body2: font({ size: 1.6, weight: 400, spacing: -1 }),
    smallBody1: font({ size: 1.4, weight: 400, spacing: -1 }),
  },
} as const;

export default theme;
