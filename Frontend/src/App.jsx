import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Coaches from './Pages/Coaches/Coaches';
import Courses from './Pages/Courses/Courses';
import SignUp from './Pages/SignUp/SIgnUp';
import Login from './Pages/Login/Login'; // ← Assuming you have this
import Dashboard from './Pages/Dashboard/Dashboard';

const AppContent = () => {
  const location = useLocation();

  // Pages that should NOT show the NavBar
  const hideNavRoutes = ['/signup', '/login'];

  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNav && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> {/* ← Add Login route */}
        <Route path="/dashboard" element={<Dashboard />} />

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
