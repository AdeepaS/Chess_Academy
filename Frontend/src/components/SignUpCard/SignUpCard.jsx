"use client"

import { useState } from "react"
import './SignUpCard.css'

export default function SignupCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    fideRating: "",
    fideId: "",
    contactNo: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log("Registration successful:", result)
        // Reset form or redirect user
        alert("Registration successful!")
        setFormData({
          name: "",
          email: "",
          password: "",
          fideRating: "",
          fideId: "",
          contactNo: "",
        })
      } else {
        const error = await response.json()
        console.error("Registration failed:", error)
        alert("Registration failed: " + (error.message || "Please try again"))
      }
    } catch (error) {
      console.error("Network error:", error)
      alert("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="signup-card">
      <div className="card-header">
        <h2 className="card-title">Create Your Account</h2>
        <p className="card-description">Start your chess journey with us</p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>

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

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fideRating" className="form-label">
              FIDE Rating <span className="optional">(Optional)</span>
            </label>
            <input
              type="number"
              id="fideRating"
              name="fideRating"
              value={formData.fideRating}
              onChange={handleInputChange}
              className="form-input"
              placeholder="e.g., 1500"
              min="0"
              max="3000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fideId" className="form-label">
              FIDE ID <span className="optional">(Optional)</span>
            </label>
            <input
              type="text"
              id="fideId"
              name="fideId"
              value={formData.fideId}
              onChange={handleInputChange}
              className="form-input"
              placeholder="e.g., 12345678"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contactNo" className="form-label">
            Contact Number <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your contact number"
            required
          />
        </div>

        <button type="submit" className="create-account-btn" disabled={isSubmitting}>
          <span className="btn-icon">♔</span>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>

        <div className="form-footer">
          <p className="login-link">
            Already have an account? <a href="/login">Sign in here</a>
          </p>
        </div>
      </form>
    </div>
  )
}
