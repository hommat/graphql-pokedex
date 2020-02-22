import React from 'react';

import Header from './Header';
import styled from '../styles';

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const SPage = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <SLayout>
      <Header />
      <SPage>{children}</SPage>
    </SLayout>
  );
};

export default Layout;
