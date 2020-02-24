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
    color: ${props => props.theme.colors.dark};
    background: ${props => props.theme.colors.background};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
