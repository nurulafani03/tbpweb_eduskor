const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { role } = req.user; // Mengambil role dari user yang sudah diverifikasi token-nya

  // Render view dashboard berdasarkan role
  if (role === 'admin') {
    res.render('admin_dashboard', { title: 'Admin Dashboard' });
  } else if (role === 'mahasiswa') {
    res.render('mahasiswa_dashboard', { title: 'Mahasiswa Dashboard' });
  } else if (role === 'dosen') {
    res.render('dosen_dashboard', { title: 'Dosen Dashboard' });
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
});

module.exports = router;
