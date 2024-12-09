'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Educations', [
      {
        title: 'Pengenalan Dasar Plastik',
        description: 'Plastik adalah material sintetis yang terbuat dari polimer, senyawa kimia yang terdiri dari rantai panjang molekul. Dikenal karena sifatnya yang ringan, tahan lama, dan mudah dibentuk, plastik telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari. Namun, di balik kemudahan yang ditawarkan, plastik memiliki dampak besar terhadap lingkungan. Sebagian besar plastik yang kita gunakan, seperti kantong belanja dan botol air, membutuhkan waktu ratusan tahun untuk terurai di alam, dan selama itu dapat mencemari tanah dan lautan.',
        quotes: 'Kurangi Plastik, Tingkatkan Kehidupan! Setiap Langkah Kecil Membawa Dampak Besar untuk Bumi.',
        image_path: 'e1.png',
        createdBy: 1, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Master of Business Administration',
        description: 'An advanced degree focusing on leadership, business strategy, and management.',
        quotes: 'Leadership is the capacity to translate vision into reality.',
        image_path: 'e2.png',
        createdBy: 1, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Educations', null, {});
  }
};
