const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model('Coach', coachSchema,'coaches');
