const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');
const router = express.Router();

// Public route
router.get('/public', (req, res) => {
    res.json({ message: 'This is a public route.' });
});

// Admin-only route
router.get('/admin', authenticateToken, authorizeRoles('Admin'), (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});

// Moderator route
router.get('/moderate', authenticateToken, authorizeRoles('Moderator', 'Admin'), (req, res) => {
    res.json({ message: 'Welcome Moderator!' });
});

// User route
router.get('/user', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome User!' });
});

module.exports = router;
