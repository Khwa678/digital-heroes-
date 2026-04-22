require('dotenv').config(); // MUST BE AT THE TOP
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ... other middleware ...

// Add this check to see what is happening
console.log("Checking URI:", process.env.MONGO_URI);

const dbURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/digital_heroes";

mongoose.connect(dbURI)
  .then(() => console.log("✅ Local MongoDB Connected"))
  .catch(err => console.error("❌ Connection Error:", err));

// Import the User Model we created earlier
const User = require('./models/User');

// --- API ROUTES ---

// 1. Post Score (PRD Section 05 & 10)
app.post('/api/scores/add', async (req, res) => {
  const { email, scoreValue, date } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check for duplicate date (Section 10 Requirement)
    const alreadyExists = user.scores.some(s => 
      new Date(s.date).toDateString() === new Date(date).toDateString()
    );

    if (alreadyExists) {
      return res.status(400).json({ message: "A score for this date already exists." });
    }

    // Add score. The User.js 'pre-save' middleware handles the 'Rolling 5' logic.
    user.scores.push({ value: scoreValue, date: new Date(date) });
    await user.save();

    res.json({ message: "Score saved!", currentScores: user.scores });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Simple Login (To get user context)
app.post('/api/auth/login', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) res.json(user);
    else res.status(404).send("User not found");
});
// Add this to your backend server.js
app.post('/api/auth/subscribe', async (req, res) => {
  const { email } = req.body;
  try {
    const User = require('./models/User'); // Ensure model is imported
    const user = await User.findOneAndUpdate(
      { email: email },
      { subscriptionStatus: 'active' },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.json({ message: "Subscription activated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));