import React from 'react';

import Header from './Header';
import { SLayout, SPage } from './Layout.style';

const Layout: React.FC = ({ children }) => {
  return (
    <SLayout>
      <Header />
      <SPage>{children}</SPage>
    </SLayout>
  );
};

export default Layout;
