import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage.js'
import Login from './components/Login/Login';
import PreLandingPage from './components/PreLandingPage/PreLandingPage.js'
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import { AuthContextProvider } from './Context/AuthContext';
import RegisterFirebase from './components/Register/RegisterFirebase';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div  className="App">

      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/*' element={<PreLandingPage/>} />
            <Route path='/home' element={<LandingPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<RegisterFirebase/>} />
            <Route path='/userHome' element={<Home />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
