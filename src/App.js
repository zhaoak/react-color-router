import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/:red/:green/:blue">
            <ColorDisplay />
          </Route>
          <Route exact path="/">
            <Redirect to="/0/0/0" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
