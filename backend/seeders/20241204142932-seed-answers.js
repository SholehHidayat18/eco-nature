'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      // Balasan untuk komentar dengan ID 1
      {
        title: 'Re: Great Article!',
        message: 'I agree, this article is very well-written.',
        comment_id: 1,
        createdBy: 2, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Re: Great Article!',
        message: 'I found it useful as well.',
        comment_id: 1,
        createdBy: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Balasan untuk komentar dengan ID 2
      {
        title: 'Re: Helpful Content',
        message: 'Yes, the examples provided were very helpful!',
        comment_id: 2,
        createdBy: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Re: Helpful Content',
        message: 'I appreciate the detailed explanations.',
        comment_id: 2,
        createdBy: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Balasan untuk komentar dengan ID 3
      {
        title: 'Re: Needs More Detail',
        message: 'That’s a good suggestion; more examples would help.',
        comment_id: 3,
        createdBy: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Re: Needs More Detail',
        message: 'I think the article is good as it is.',
        comment_id: 3,
        createdBy: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
