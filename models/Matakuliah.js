const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Matakuliah = sequelize.define('Matakuliah', {
  kode_mata_kuliah: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  nama_mata_kuliah: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dosen_pengampu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kelas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ruang_kelas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jadwal_kelas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Matakuliah;
