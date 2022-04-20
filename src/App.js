import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage.js'
import Login from './components/Login/Login';
import PreLandingPage from './components/PreLandingPage/PreLandingPage.js'
import Register from './components/Register/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <div  className="App">
      <Router>
        <Routes>
          <Route path='/*' element={<PreLandingPage/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/userHome' element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
