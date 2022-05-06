import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>I am Checkout</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
