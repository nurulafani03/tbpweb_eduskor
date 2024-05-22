const express = require('express');
const router = express.Router();

// Endpoint untuk login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // logika validasi 
  if (username === 'admin' && password === 'admin123') {
    // Jika kredensial valid, kirimkan respons sukses
    res.json({ message: 'Login successful' });
  } else {
    // Jika kredensial tidak valid, kirimkan respons error
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;
