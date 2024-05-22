const bcrypt =require('bcrypt');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tambahkan data ke dalam tabel admin
    return queryInterface.bulkInsert('admin', [
      {

        username: 'admin1',
        password: 'admin123'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Hapus semua data dari tabel admin
    return queryInterface.bulkDelete('admin', null, {});
  }
};
