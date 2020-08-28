import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/Home';

import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
