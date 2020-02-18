import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { home, pokemon } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:id" component={pokemon} />
        <Route path="/" component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
