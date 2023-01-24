import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:red/:green/:blue">
            <ColorDisplay />
          </Route>
          <Route path="*">
            <Redirect to="/0/0/0" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
