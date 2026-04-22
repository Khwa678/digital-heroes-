const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Ensure you hash this before saving!
  
  // PRD Section 04: Subscription Tracking
  subscriptionStatus: { 
    type: String, 
    enum: ['active', 'inactive', 'lapsed'], 
    default: 'inactive' 
  },
  
  // PRD Section 05: Rolling 5-Score Logic
  // Only the latest 5 scores are kept here
  scores: [{
    value: { type: Number, min: 1, max: 45 },
    date: { type: Date, required: true }
  }],
  
  // PRD Section 08: Charity Selection (Min 10%)
  charityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Charity' },
  contributionPercent: { type: Number, default: 10, min: 10 },
  
  // PRD Section 11: Admin Control
  role: { type: String, enum: ['subscriber', 'admin'], default: 'subscriber' },
  
  // PRD Section 10: Winnings Tracking
  totalWinnings: { type: Number, default: 0 }
}, { timestamps: true });

/**
 * PRE-SAVE MIDDLEWARE
 * Logic: Every time a user is saved, we check the score array.
 * We sort by date (newest first) and trim to 5.
 */
userSchema.pre('save', function(next) {
  if (this.scores && this.scores.length > 5) {
    // Sort descending by date
    this.scores.sort((a, b) => new Date(b.date) - new Date(a.date));
    // Keep only the 5 most recent
    this.scores = this.scores.slice(0, 5);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);