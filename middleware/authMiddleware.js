const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.redirect('/auth/login');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.userId);

        if (!req.user) {
            throw new Error('User not found');
        }

        next();
    } catch (error) {
        console.error(error);
        res.redirect('/auth/login');
    }
};

module.exports = authMiddleware;
