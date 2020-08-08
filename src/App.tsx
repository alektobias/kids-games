import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Animals from './pages/Animals';
import Minerals from './pages/Minerals';
import Vegetables from './pages/Vegetables';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/animals" component={Animals} />
        <Route path="/minerals" component={Minerals} />
        <Route path="/vegetables" component={Vegetables} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
