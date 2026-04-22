const mongoose = require('mongoose');

const drawSchema = new mongoose.Schema({
  monthYear: { type: String, required: true },
  winningNumbers: [Number],
  status: { type: String, enum: ['simulation', 'published'], default: 'simulation' }, // PRD Section 06 
  totalPrizePool: Number,
  winners: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    matchType: Number, // 3, 4, or 5 [cite: 49]
    prizeAmount: Number,
    verified: { type: Boolean, default: false }
  }]
});

module.exports = mongoose.model('Draw', drawSchema);