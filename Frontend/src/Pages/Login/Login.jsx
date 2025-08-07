import React from 'react';
import LoginCard from '../../components/LoginCard/LoginCard';
import './Login.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="header-section">
          <h1 className="academy-title">Nobel Worriors Chess Academy</h1>
          <p className="academy-subtitle">Welcome back! Please login to your account</p>
        </div>
        <LoginCard />
      </div>
      <div className="chess-pattern"></div>
    </div>
  );
}
