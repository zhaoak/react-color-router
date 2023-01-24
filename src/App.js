import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
