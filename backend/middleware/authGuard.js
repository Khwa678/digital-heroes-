const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authGuard = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.subscriptionStatus !== 'active') {
      return res.status(403).json({ error: "Active subscription required." });
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(401).json({ error: "Please authenticate." });
  }
};

module.exports = authGuard;