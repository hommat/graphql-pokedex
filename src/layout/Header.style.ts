import { Link } from 'react-router-dom';

import styled from '../styles';

export const SHeader = styled.header`
  background: black;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const SNav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const SLink = styled(Link)`
  color: white;

  &:visited {
    color: white;
  }
`;
