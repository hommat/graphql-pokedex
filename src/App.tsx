import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Layout from './layout/Layout';
import theme from './styles/theme';
import { NamesProvider } from './context/names';
import { home, pokemon } from './pages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NamesProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Normalize />
          <Layout>
            <Switch>
              <Route path="/pokemon/:name" component={pokemon} />
              <Route path="/" component={home} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </NamesProvider>
    </ThemeProvider>
  );
};

export default App;
