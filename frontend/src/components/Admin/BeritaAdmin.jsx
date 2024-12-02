import React from 'react';
import { FaBell, FaUser, FaTachometerAlt, FaHandHoldingHeart, FaBookOpen, FaUsers, FaExclamationCircle, FaGift, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';

const BeritaAdmin = () => {
  const searchBerita = () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const judulName = row.cells[1].textContent.toLowerCase();
      if (judulName.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#3B9E3F] text-white p-6 mt-14">
                <NavbarAdmin/>
            </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 px-6 py-4 flex justify-between items-center">
          <a href="/admin/Dashboard" className="font-bold text-2xl text-[#3B9E3F]">
            EcoNature Admin
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#3B9E3F] hover:text-gray-700">
              <FaBell className="text-2xl" />
            </a>
            <a href="/admin/ProfileAdmin" className="text-[#3B9E3F] hover:text-gray-700">
              <FaUser className="text-2xl" />
            </a>
          </div>
        </nav>      
        
        {/* Header */}
        <header className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow mb-6 mt-16">
          <div className="flex items-center">
          <FaNewspaper className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Berita</h1>
              <p  className="text-lg">Kelola berita dan pastikan informasi terbaru tersampaikan dengan baik.</p>
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            id="search"
            placeholder="Cari berita..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={searchBerita}
            className="ml-4 px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500"
          >
            Cari
          </button>
        </div>

        {/* Add Berita Button */}
        <div className="mb-6">
          <a
            href="/admin/TambahBeritaAdmin"
            className="px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500 inline-flex items-center"
          >
            <i className="fas fa-plus-circle mr-2"></i> Tambah Berita
          </a>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
            <div>
              <h5 className="text-xl font-semibold">Total Berita</h5>
              <p className="text-[#3B9E3F]">Jumlah keseluruhan berita yang ada saat ini.</p>
            </div>
            <i className="fas fa-newspaper text-4xl text-green-500"></i>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
            <div>
              <h5 className="text-xl font-semibold">Berita Aktif</h5>
              <p className="text-[#3B9E3F]">Berita yang saat ini aktif dan ditampilkan.</p>
            </div>
            <i className="fas fa-check-circle text-4xl text-green-500"></i>
          </div>
        </div>

        {/* Berita Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
          <table className="w-full border-collapse">
            <thead className="bg-[#3B9E3F] text-white">
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Judul</th>
                <th className="px-4 py-2 border">Nama Penulis</th>
                <th className="px-4 py-2 border">Tanggal</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">1</td>
                <td className="px-4 py-2 border">Pemulihan Terumbu Karang di Indonesia</td>
                <td className="px-4 py-2 border">Asnida Riani</td>
                <td className="px-4 py-2 border text-center">2024-09-11</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-400 mr-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">2</td>
                <td className="px-4 py-2 border">Kesadaran Lingkungan Meningkat : Ribuan Relawan Ikut Gerak Bersih Pantai</td>
                <td className="px-4 py-2 border">Budi Budiman</td>
                <td className="px-4 py-2 border text-center">2024-08-12</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-400 mr-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">3</td>
                <td className="px-4 py-2 border">Indonesia Jadi Negara Penyumbang Sampah Plastik Terbanyak Ketiga di Dunia</td>
                <td className="px-4 py-2 border">Rakha Putra</td>
                <td className="px-4 py-2 border text-center">2024-09-11</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-400 mr-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">4</td>
                <td className="px-4 py-2 border">Gerakan Menanam 1 Juta Pohon Pohon Untuk Masa Depan Hijau</td>
                <td className="px-4 py-2 border">Cika Putri</td>
                <td className="px-4 py-2 border text-center">2024-09-29</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-400 mr-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">5</td>
                <td className="px-4 py-2 border">Indonesia Catat Rekor Suhu Tertinggi Akibat Pemanasan Global</td>
                <td className="px-4 py-2 border">Zendaya Putri</td>
                <td className="px-4 py-2 border text-center">2024-10-25</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-400 mr-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">6</td>
                <td className="px-4 py-2 border">Gerakan Menanam 1 Juta Pohon Pohon Untuk Masa Depan Hijau</td>
                <td className="px-4 py-2 border">Muhammad</td>
                <td className="px-4 py-2 border text-center">2024-10-28</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-400 mr-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BeritaAdmin;
