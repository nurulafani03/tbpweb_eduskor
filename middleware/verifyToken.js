const jwt = require('jsonwebtoken');
const { secret } = require('../.env'); // Import secret key dari config

function verifyToken(req, res, next) {
  const token = req.headers['authorization']; // Ambil token dari header authorization

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secret); // Verify token dengan secret key
    req.user = decoded; // Simpan informasi user yang didecode di req.user
    next(); // Lanjutkan ke route berikutnya
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
}

module.exports = verifyToken;
