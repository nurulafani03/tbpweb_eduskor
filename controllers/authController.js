const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

exports.getLogin = (req, res) => {
    res.render('mahasiswa/login', { pageTitle: 'Login Mahasiswa' });
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.render('mahasiswa/login', { pageTitle: 'Login Mahasiswa', error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.render('mahasiswa/login', { pageTitle: 'Login Mahasiswa', error: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
        res.cookie('jwt', token, { httpOnly: true });
        res.redirect('/auth/dashboard');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getDashboard = (req, res) => {
    res.render('mahasiswa/dashboard', { pageTitle: 'Dashboard Mahasiswa' });
};
