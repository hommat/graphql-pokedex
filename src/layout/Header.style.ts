import { Link } from 'react-router-dom';

import styled from '../styles';

export const SHeader = styled.header`
  background: black;
  box-shadow: 2px 2px 17px -1px rgba(0, 0, 0, 0.87);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

export const STitle = styled(Link)`
  padding: 10px;
  color: white;
  font-weight: bold;
  transition: 0.1s;
  border-radius: 8px;
  font-size: 1.35rem;
  letter-spacing: 0.07rem;

  &:visited {
    color: white;
  }
`;
