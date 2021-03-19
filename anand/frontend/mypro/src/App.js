import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Students from './components/Students'
import Register from './components/Register'
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={()=>{
          return (
            <Students />
          )
        }} />
        <Route exact path='/register' render={()=>{
          return (
            <Register />
          )
        }} />
        <Route exact path="/login" render={()=>{
          return (
            <Login />
          )
        }} />
      </Switch>
    </Router>
    
  );
}

export default App;
