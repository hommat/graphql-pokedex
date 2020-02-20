import React from 'react';
import { Normalize } from 'styled-normalize';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './layout/Header';
import { home, pokemon } from './pages';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Normalize />
      <Header />
      <Switch>
        <Route path="/pokemon/:name" component={pokemon} />
        <Route path="/" component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
