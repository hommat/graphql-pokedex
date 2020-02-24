import { Link } from 'react-router-dom';

import styled from '../styles';

export const SHeader = styled.header`
  background: black;
  box-shadow: ${props => props.theme.shadows.default};
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
  font-size: 1.35rem;
  letter-spacing: 0.07rem;

  &:visited {
    color: white;
  }
`;
