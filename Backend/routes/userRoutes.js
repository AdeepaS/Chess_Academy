const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, fideRating, fideId, contactNo } = req.body;

    // Additional server-side validation
    if (!name || !email || !password || !contactNo) {
      return res.status(400).json({ 
        success: false,
        message: 'Name, email, password, and contact number are required' 
      });
    }

    // Password strength validation
    if (password.length < 8) {
      return res.status(400).json({ 
        success: false,
        message: 'Password must be at least 8 characters long' 
      });
    }

    // Check if user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ 
        success: false,
        message: 'User already exists with this email address' 
      });
    }

    // Validate FIDE rating if provided
    if (fideRating && (fideRating < 0 || fideRating > 3000)) {
      return res.status(400).json({ 
        success: false,
        message: 'FIDE rating must be between 0 and 3000' 
      });
    }

    // Validate FIDE ID if provided
    if (fideId && !/^\d{8,10}$/.test(fideId)) {
      return res.status(400).json({ 
        success: false,
        message: 'FIDE ID must be 8-10 digits' 
      });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      contactNo: contactNo.trim(),
      fideRating: fideRating ? parseInt(fideRating) : null,
      fideId: fideId ? fideId.trim() : null
    });

    // Save user to database
    const savedUser = await newUser.save();

    // Log successful registration
    console.log(`New user registered: ${savedUser.email} at ${new Date().toISOString()}`);

    // Return success response (password is automatically excluded by toJSON method)
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: savedUser,
        userId: savedUser._id
      }
    });

  } catch (error) {
    console.error('Registration error:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        success: false,
        message: 'Validation error',
        errors: validationErrors
      });
    }

    // Handle duplicate key error (email already exists)
    if (error.code === 11000) {
      return res.status(409).json({ 
        success: false,
        message: 'User already exists with this email address'
      });
    }

    // Handle other errors
    res.status(500).json({ 
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

// GET /api/auth/check-email/:email (optional - to check if email exists)
router.get('/check-email/:email', async (req, res) => {
  try {
    const { email } = req.params;
    
    const existingUser = await User.findByEmail(email);
    
    res.json({
      success: true,
      exists: !!existingUser
    });
  } catch (error) {
    console.error('Email check error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error checking email'
    });
  }
});

module.exports = router;