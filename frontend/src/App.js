import React from 'react';

import {Route , Switch} from 'react-router-dom'
// layouts
import MainLayout from './layouts/MainLayout'
// pages
import Homepage from './home/index'
import Products from './products';
import Login from './login/index'
// styles

import './default.scss'
import Checkout from './shoppingcart/Checkout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=>(
          <MainLayout>
            <Homepage/>
          </MainLayout>
        )}/>
        <Route path="/login" render={()=>(
          <MainLayout>
            <Login/>
          </MainLayout>
        )}/>
        <Route path="/products" render={()=>(
          <MainLayout>
            <Products/>
          </MainLayout>
        )}/>
        <Route path="/checkout" render={()=>(
          <MainLayout>
            <Checkout/>
          </MainLayout>
        )}/>
      </Switch>
    </div>
  );
}

export default App;

