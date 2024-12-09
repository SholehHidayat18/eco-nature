'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Banks', [
      {
        an: 'John Doe',
        no_rek: '1234567890',
        brand: 'BCA',
        createdBy: 1,
        image_path: 'bca.png', // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        an: 'Jane Smith',
        no_rek: '0987654321',
        brand: 'Bank B',
        image_path: 'bca.png', // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdBy: 1, // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        an: 'Mark Johnson',
        no_rek: '1122334455',
        brand: 'Bank C',
        image_path: 'bca.png', // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdBy: 1, // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Banks', null, {});
  }
};
