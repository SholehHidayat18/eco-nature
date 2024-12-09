'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {

        message: 'I found this article very insightful and well-written.',
        news_id: 1, // Sesuaikan dengan ID berita yang ada di tabel News
        education_id: null, // Null karena komentar ini untuk berita
        createdBy: 1, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: 'This educational content really helped me understand the topic.',
        news_id: null, // Null karena komentar ini untuk edukasi
        education_id: 1, // Sesuaikan dengan ID edukasi yang ada di tabel Educations
        createdBy: 2, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: 'This educational content really helped me understand the topic.',
        news_id: null, // Null karena komentar ini untuk edukasi
        donation_id: 1, // Sesuaikan dengan ID edukasi yang ada di tabel Educations
        createdBy: 2, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: 'This educational content really helped me understand the topic.',
        news_id: null, // Null karena komentar ini untuk edukasi
        donation_id: 2,// Sesuaikan dengan ID edukasi yang ada di tabel Educations
        createdBy: 2, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: 'The article is good, but it could use more examples.',
        news_id: 2, // Sesuaikan dengan ID berita yang ada di tabel News
        education_id: null,
        createdBy: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
