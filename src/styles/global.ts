import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
