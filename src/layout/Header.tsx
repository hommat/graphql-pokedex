import React from 'react';
import { Link } from 'react-router-dom';

import styled from '../styles';

const SHeader = styled.header`
  background: black;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const SNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const SLink = styled(Link)`
  color: white;
`;

const Header = () => {
  return (
    <SHeader>
      <SNav>
        <SLink to="/">Home</SLink>
      </SNav>
    </SHeader>
  );
};

export default Header;
