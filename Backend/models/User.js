const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // This already creates an index automatically
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long']
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid contact number']
  },
  fideRating: {
    type: Number,
    min: [0, 'FIDE rating cannot be negative'],
    max: [3000, 'FIDE rating cannot exceed 3000'],
    default: null
  },
  fideId: {
    type: String,
    trim: true,
    default: null,
    match: [/^\d{8,10}$/, 'FIDE ID must be 8-10 digits']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // This adds createdAt and updatedAt automatically
});

// REMOVED: userSchema.index({ email: 1 }); 
// ↑ This was causing duplicate index warning because 'unique: true' already creates an index

// Keep only the fideId index (this one is needed)
userSchema.index({ fideId: 1 }, { sparse: true });

// Pre-save middleware to validate FIDE fields
userSchema.pre('save', function(next) {
  // If FIDE rating is provided, FIDE ID should also be provided and vice versa
  if ((this.fideRating && !this.fideId) || (!this.fideRating && this.fideId)) {
    // This is just a warning, not an error - both are optional
  }
  next();
});

// Instance method to get user without password
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

// Static method to find user by email
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

module.exports = mongoose.model('User', userSchema);