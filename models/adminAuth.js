const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Pastikan untuk menyesuaikan path ke konfigurasi database Anda

const Admin = sequelize.define('Admin', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'admin', // Nama tabel di database
  timestamps: false, // Jika tidak menggunakan createdAt dan updatedAt
});

module.exports = Admin;
