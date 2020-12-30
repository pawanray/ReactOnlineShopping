import React, {useState, useEffect} from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink, Redirect
} from "react-router-dom";
import Home from './pages/home/home';
import CategoryProduct from './pages/categoryProduct/categoryProduct';

function App(){
  return (
    <Router>
    <AppHeader/>
    <div className="App">
    </div>
    <Switch>
            <Route path="/" exact component={Home}/>
              <Route path="/products/:name" exact component={CategoryProduct}/>
             {/* <Route exact path="/login" component={Login}/>  */}
        </Switch>
    </Router>
  );
}

export default App;
