const router = require('express').Router();
const Score = require('../models/Score');

router.post('/add-score', async (req, res) => {
    const { userId, score, date } = req.body;

    try {
        // 1. Check for duplicate date [cite: 96]
        const existing = await Score.findOne({ userId, date });
        if (existing) return res.status(400).json("Only one score per date.");

        // 2. Add the new score (Stableford 1-45) [cite: 42]
        const newScore = new Score({ userId, score, date });
        await newScore.save();

        // 3. Roll the scores: Keep only the latest 5 [cite: 45]
        const userScores = await Score.find({ userId }).sort({ date: -1 });
        if (userScores.length > 5) {
            const idsToDelete = userScores.slice(5).map(s => s._id);
            await Score.deleteMany({ _id: { $in: idsToDelete } });
        }

        res.json("Score updated successfully.");
    } catch (err) {
        res.status(500).json(err);
    }
});