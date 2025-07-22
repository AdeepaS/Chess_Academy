const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const coachRoutes = require('./routes/coachRoutes');
const userRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/coaches', coachRoutes);
app.use('/api/users', userRoutes);
app.use('/api', userRoutes);

// Health check route (optional)
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Chess Academy API is running',
    timestamp: new Date().toISOString()
  });
});


// Connect to MongoDB and start server


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log('MongoDB Error:', error));


