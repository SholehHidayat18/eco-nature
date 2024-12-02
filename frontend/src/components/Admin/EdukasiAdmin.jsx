import React from 'react';
import { FaBell, FaUser, FaTachometerAlt, FaHandHoldingHeart, FaBookOpen, FaUsers, FaExclamationCircle, FaGift, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';

const EdukasiAdmin = () => {
  const searchEdukasi = () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const materiTitle = row.cells[1].textContent.toLowerCase();
      if (materiTitle.includes(searchValue)) {
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
        <div className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow mb-6 mt-16">
          <div className="flex items-center">
          <FaBookOpen className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-semibold mb-2">Edukasi</h1>
              <p className="text-lg">Kelola materi edukasi dan pastikan pengetahuan pengguna terus berkembang.</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            id="search"
            placeholder="Cari materi edukasi..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={searchEdukasi}
            className="ml-4 px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500"
          >
            Cari
          </button>
        </div>

        {/* Add Materi Button */}
        <div className="mb-6">
          <a
            href="/admin/TambahBeritaAdmin"
            className="px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500 inline-flex items-center"
          >
            <i className="fas fa-plus-circle mr-2"></i> Tambah Materi
          </a>
        </div>

        {/* Edukasi Summary */}
        <div className="flex mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center w-1/3 mr-4">
            <div>
              <h5 className="text-xl font-semibold">Total Materi</h5>
              <p className="text-[#3B9E3F]">6 Materi</p>
            </div>
            <i className="fas fa-book text-4xl text-green-600 ml-4"></i>
          </div>
        </div>

        {/* Edukasi Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
          <table className="w-full border-collapse">
            <thead className="bg-[#3B9E3F] text-white">
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Judul Materi</th>
                <th className="px-4 py-2 border">Tanggal Ditambahkan</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">1</td>
                <td className="px-4 py-2 border">Pengenalan Dasar Plastik</td>
                <td className="px-4 py-2 border text-center">2024-10-01</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-yellow-400 mr-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">2</td>
                <td className="px-4 py-2 border">Dampak Sampah Plastik</td>
                <td className="px-4 py-2 border text-center">2024-10-02</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-yellow-400 mr-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">3</td>
                <td className="px-4 py-2 border">Solusi Pengurangan Plastik</td>
                <td className="px-4 py-2 border text-center">2024-10-02</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-yellow-400 mr-2">
                    <i className="fas fa-edit"></i> 
                    <a href="/admin/TambahMateriAdmin">Edit</a>
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">4</td>
                <td className="px-4 py-2 border">Perubahan Iklim dan Dampaknya</td>
                <td className="px-4 py-2 border text-center">2024-11-01</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-yellow-400 mr-2">
                    <i className="fas fa-edit"></i> 
                    <a href="/admin/TambahMateriAdmin">Edit</a>
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">5</td>
                <td className="px-4 py-2 border">Keanekanragaman Hayati dan Konversi</td>
                <td className="px-4 py-2 border text-center">2024-11-02</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-yellow-400 mr-2">
                    <i className="fas fa-edit"></i> 
                    <a href="/admin/TambahMateriAdmin">Edit</a>
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-400">
                    <i className="fas fa-trash"></i> Hapus
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">6</td>
                <td className="px-4 py-2 border">Dasar-Dasar Lingkungan Hidup</td>
                <td className="px-4 py-2 border text-center">2024-11-03</td>
                <td className="px-4 py-2 border text-center">
                  <button className="px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-yellow-400 mr-2">
                    <i className="fas fa-edit"></i> 
                    <a href="/admin/TambahMateriAdmin">Edit</a>
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-400">
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

export default EdukasiAdmin;
