
import './App.css';

import {BrowserRouter as Router,Routes as Switch,Route} from 'react-router-dom';

import React, {useState} from 'react';
import Home from './Pages/Home';

function App() {

 


  return (
    <Router>
        <Switch>
        <Route path="/" element={<Home/>} exact />
        </Switch>
            
    </Router>
  );
}

export default App;
