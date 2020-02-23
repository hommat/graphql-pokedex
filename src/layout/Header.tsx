import React from 'react';

import { SHeader, SNav, SLink } from './Header.style';

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
