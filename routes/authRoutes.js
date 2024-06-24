const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login page
router.get('/login', authController.getLogin);

// Handle login form submission
router.post('/login', authController.postLogin);

// Dashboard page (protected route)
router.get('/dashboard', authController.getDashboard);

module.exports = router;
