
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home'
import Coaches from './Pages/Coaches/Coaches'
import Courses from './Pages/Courses/Courses';
import SignUp from './Pages/SignUp/SIgnUp';

/*
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
*/

const AppContent = () => {
  const location = useLocation();

  // Define routes that should NOT show the NavBar
  const hideNavRoutes = ['/signup'];
 //!hideNavRoutes.includes(location.pathname) && //
  return (
    <>
      
      {<NavBar />}  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} /> {/* 👈 Add the SignUp route */}
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;