import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Pretendard-Regular.woff';

import BREAK_POINTS from '@/constants/breakPoints.ts';

const GlobalStyle = createGlobalStyle`
  /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
  html {
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.white};
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 400
  }

  ul {
    list-style: none
  }

  li {
    list-style: none;
  }

  button, input, select {
    margin: 0;
    background-color: transparent;
    border: none;
  }

  *, :after, :before {
    box-sizing: inherit;
  }

  img, video {
    max-width: 100%;
    height: auto
  }

  iframe {
    border: 0
  }


  table {
    border-spacing: 0;
    border-collapse: collapse
  }

  td, th {
    padding: 0
  }

  /* global styles */

  @font-face {
    font-family: 'Pretendard-Regular';
    font-display: optional;
    src: url(${font}) format('woff');
    unicode-range: U+0020-007E;
  }

  :root {
    font-size: 62.5%; /* 1rem = 10px for all devices */

    @media (max-width: ${BREAK_POINTS.MOBILE}px) {
      font-size: 62.5%; /* 1rem = 10px for mobile devices */
    }

    @media (max-width: ${BREAK_POINTS.TABLET}px) {
      font-size: 62.5%; /* 1rem = 10px for tablet devices */
    }

    @media (min-width: ${BREAK_POINTS.DESKTOP}px) {
      font-size: 62.5%; /* 1rem = 10px for desktop devices */
    }
  }

  * {
    scrollbar-width: none;
    font-family: 'Pretendard-Regular' , sans-serif;


    &::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }
  }

  input {
    padding:0 ;
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
    background-color: transparent;
    border: none;
    outline: none;
  }

  abbr {
    text-decoration: none;
  }
  
  button, select {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  input, select {
    background: inherit;
  }
`;

export default GlobalStyle;
