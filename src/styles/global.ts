import { createGlobalStyle } from './';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.dark}
  }

  ul {
    list-style: none;
  }
`;
