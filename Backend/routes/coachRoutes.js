const express = require('express');
const router = express.Router();
const Coach = require('../models/Coach');

// GET all coaches
router.get('/', async (req, res) => {
  try {
    const coaches = await Coach.find();
    console.log('📦 Coaches from DB:', coaches); // Debug log
    res.json(coaches);
  } catch (err) {
     console.error('❌ Error:', err.message);
    res.status(500).json({ error: err.message });

  }
});


// POST a new coach
router.post('/', async (req, res) => {
  const { name, age, rating, image } = req.body;
  try {
    const newCoach = new Coach({ name, age, rating, image });
    await newCoach.save();
    res.status(201).json(newCoach);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
