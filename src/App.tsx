import React from 'react';
import { Normalize } from 'styled-normalize';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './layout/Header';
import { NamesProvider } from './context/names';
import { home, pokemon } from './pages';

function App() {
  return (
    <NamesProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Normalize />
        <Header />
        <Switch>
          <Route path="/pokemon/:name" component={pokemon} />
          <Route path="/" component={home} />
        </Switch>
      </BrowserRouter>
    </NamesProvider>
  );
}

export default App;
