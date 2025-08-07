"use client";

import { useState } from "react";
import './LoginCard.css';

export default function LoginCard() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Login successful:", result);
        alert("Login successful!");
        // redirect or reset form here if needed
      } else {
        const error = await response.json();
        alert("Login failed: " + (error.message || "Please try again"));
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-card">
      <div className="card-header">
        <h2 className="card-title">Welcome Back</h2>
        <p className="card-description">Sign in to continue your chess journey</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password <span className="required">*</span>
          </label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input password-input"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        <button type="submit" className="login-btn" disabled={isSubmitting}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>

        <div className="form-footer">
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </form>
    </div>
  );
}
