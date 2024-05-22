const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminAuth');

const form = (req, res) => {
    const token = req.cookies.token;
  
    res.render("admin", { title: "Express" });
}

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ where: { username } });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = bcrypt.compareSync(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: admin.id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

    return res.render('viewprofile')

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
    login,
    form,
};