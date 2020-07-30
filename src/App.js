import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepages/homepage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
