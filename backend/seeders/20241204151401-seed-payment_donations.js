'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payments', [
      {
        total: 100000,
        metode: 'transfer',
        name: 'John Doe',
        email: 'john.doe@example.com',
        no_handphone: '081234567890',
        status: 'Diproses',
        message: 'Semoga Amanah',
        image_path: 'bukti1.jpg',
        donation_id: 1,
        bank_id: 1, // Sesuaikan dengan ID Bank yang ada di tabel Banks
        createdBy: 1, // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total: 250000,
        metode: 'transfer',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        no_handphone: '082345678901',
        status: 'Diterima',
        message: 'Semoga Amanah',
        image_path: 'bukti2.jpg',
        donation_id: 1,
        bank_id: 2, // Sesuaikan dengan ID Bank yang ada di tabel Banks
        createdBy: 2, // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total: 500000,
        metode: 'transfer',
        name: 'Mark Johnson',
        email: 'mark.johnson@example.com',
        no_handphone: '083456789012',
        donation_id: 2,
        status: 'Ditolak',
        message: 'Semoga Amanah',
        image_path: 'bukti3.jpg',
        donation_id: 1,
        bank_id: 3, // Sesuaikan dengan ID Bank yang ada di tabel Banks
        createdBy: 3, // Sesuaikan dengan ID pengguna yang ada di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payments', null, {});
  }
};
