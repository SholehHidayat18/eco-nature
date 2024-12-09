'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pengaduans', [
      {
        name: 'Ahmad Fauzi',
        title: 'Sampah yang Menumpuk di Pembuangan Sampah',
        email: 'ahmad.fauzi@example.com',
        jenis_sampah: 'Plastik',
        no_handphone: '081234567890',
        alamat: 'Jl. Mawar No. 123, Surabaya',
        provinsi: 'Sumatra Utara',
        description: 'Terdapat tumpukan sampah yang menumpuk di area pembuangan sampah sementara. Sampah sudah menggunung dan mencemari lingkungan sekitar. Bau menyengat dan kotoran terlihat menyebar di sekitar lokasi, sehingga mengganggu kenyamanan warga setempat. Kami berharap pihak terkait dapat segera mengangkut sampah dan membersihkan area tersebut untuk mencegah dampak kesehatan dan lingkungan yang lebih parah bagi warga sekitar.',
        image_path: 'p1.png',
        status: 'Diproses',
        createdBy: 2, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Siti Aminah',
        title: 'Sampah yang Menumpuk disekitaran Jembatan',
        email: 'siti.aminah@example.com',
        jenis_sampah: 'Kaca',
        no_handphone: '082345678901',
        provinsi: 'Sumatra Utara',
        description: 'Jembatan ini berada di area perkotaan yang ramai, menghubungkan beberapa wilayah di Bengkulu dan melintasi Sungai Bengkulu, yang alirannya membawa sampah dari berbagai kawasan di hulu.',
        status: 'Selesai',
        image_path: 'p2.png',
        alamat: 'Jl. Kenanga No. 45, Bandung',
        createdBy: 3, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Budi Santoso',
        title: 'Sampah yang Menumpuk ditepi Jalan',
        email: 'budi.santoso@example.com',
        jenis_sampah: 'Kertas',
        provinsi: 'Sumatra Utara',
        description: 'Area ini sering dikeluhkan warga karena penumpukan sampah di pinggir jalan yang terkadang belum diangkut tepat waktu. Lokasi ini termasuk area dengan lalu lintas padat dan banyak aktivitas komersial, yang memperparah volume sampah setiap harinya. Masalah ini diperburuk dengan minimnya fasilitas pengelolaan sampah',
        status: 'Ditolak',
        image_path: 'p3.png',
        no_handphone: '083456789012',
        alamat: 'Jl. Melati No. 67, Jakarta',
        createdBy: 3, // Sesuaikan dengan ID pengguna di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pengaduans', null, {});
  }
};
