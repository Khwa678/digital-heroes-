
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, min: 1, max: 45, required: true }, // [cite: 42]
  date: { type: Date, required: true }
});

// Ensures one score entry per date per user [cite: 96]
scoreSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Score', scoreSchema);