'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Activities', [
      {
        pengaduan_id: 1, // Sesuaikan dengan ID pengaduan yang ada di tabel Pengaduans
        relawan_id: 1,   // Sesuaikan dengan ID relawan yang ada di tabel Relawans
        createdBy: 1,    // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pengaduan_id: 2, // Sesuaikan dengan ID pengaduan yang ada di tabel Pengaduans
        relawan_id: 2,   // Sesuaikan dengan ID relawan yang ada di tabel Relawans
        createdBy: 1,    // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pengaduan_id: 2, // Sesuaikan dengan ID pengaduan yang ada di tabel Pengaduans
        relawan_id: 1,   // Sesuaikan dengan ID relawan yang ada di tabel Relawans
        createdBy: 1,    // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Activities', null, {});
  }
};
