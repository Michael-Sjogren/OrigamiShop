import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {Route , Switch} from 'react-router-dom'
// layouts
import MainLayout from './layouts/MainLayout'
// pages
import Homepage from './pages/home/index'
import Login from './pages/login/index'
// styles
import './default.scss'

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
      </Switch>
    </div>
  );
}

export default App;

