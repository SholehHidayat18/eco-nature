'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Newses', [
      {
        title: 'Climate Change Awareness Campaign',
        description: 'A comprehensive campaign to raise awareness about climate change and its effects.',
        image_path: 'a1.png',
        username: 'Mulya Love Nala',
        message: 'banggg donasi banggg buat modal nikah',
        createdBy: 3, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Local Community Cleanup Drive',
        description: 'An initiative to clean up local neighborhoods and promote proper waste management.',
        username: 'Mulya Love Nala',
        message: 'banggg donasi banggg buat modal nikah',
        image_path: 'a2.png',
        createdBy: 2, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Recycling Awareness Workshop',
        description: 'A workshop to educate the public about the importance of recycling.',
        username: 'Mulya Love Nala',
        message: 'banggg donasi banggg buat modal nikah',
        image_path: 'a3.png',
        createdBy: 3, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Newses', null, {});
  }
};
