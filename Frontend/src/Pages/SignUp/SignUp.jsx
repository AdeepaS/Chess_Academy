import React, { useState } from 'react';
import './SignUp.css'; // optional styling

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    fideId: '',
    rating: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors("Passwords do not match.");
      return;
    }

    // Optional: Submit the form data to backend
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      fideId: '',
      rating: '',
      password: '',
      confirmPassword: '',
    });
    setErrors('');
  };

  return (
    <div className="signup-container">
      <h2>Join the Chess Academy</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="fideId"
          placeholder="FIDE ID (optional)"
          value={formData.fideId}
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="FIDE Rating (optional)"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {errors && <p className="error">{errors}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
