import React, {useState, useEffect} from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink, Redirect
} from "react-router-dom";
import Home from './pages/home/home';
import CategoryProduct from './pages/categoryProduct/categoryProduct';
import Login from './pages/auth/login/login';
import Register from './pages/auth/register/register';
import Wishlist from './pages/wishlist/wishlist';
import Cart from './pages/cart/cart';

function App(){
  return (
    <Router>
    <AppHeader/>
    <div className="App">
    </div>
    <Switch>
            <Route path="/" exact component={Home}/>
              <Route path="/products/:name" exact component={CategoryProduct}/>
             <Route exact path="/login" component={Login}/> 
             <Route exact path="/register" component={Register}/> 
             <Route exact path="/wishlist" component={Wishlist}/> 
             <Route exact path="/cart" component={Cart}/> 

        </Switch>
        <AppFooter/>
    </Router>
  );
}

export default App;
