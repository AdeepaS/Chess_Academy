/*import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
    <NavBar/>
    <Header/>
    </>
  )
}

export default App
*/

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home'
import Coaches from './Pages/Coaches/Coaches'
import Courses from './Pages/Courses/Courses'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
};

export default App;
