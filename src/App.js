import React, {useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  return (
    <>
    
    <div className="App">
      <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/login" component={LoginPage} ></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <PrivateRoute path="/home" component={ HomePage } ></PrivateRoute>
        </Switch>
        </AuthProvider>
      </Router>
  
    </div>
    
    
    
    
    
    </>
  );
}

export default App;
