import React from 'react';
import { FaBell, FaUser, FaTachometerAlt, FaHandHoldingHeart, FaBookOpen, FaUsers, FaExclamationCircle, FaGift, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';

const DonasiAdmin = () => {
  const searchDonasi = () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const donaturName = row.cells[1].textContent.toLowerCase();
      if (donaturName.includes(searchValue)) {
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
        <div className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow-md mb-6 mt-16">
          <div className="flex items-center">
          <FaHandHoldingHeart className="text-3xl mr-4"/>
            <div>
              <h1 className="text-3xl font-semibold mb-2">Donasi</h1>
              <p className="text-lg">Melihat detail donasi dan kontribusi yang telah dilakukan oleh pengguna.</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            id="search"
            placeholder="Cari donasi..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={searchDonasi}
            className="ml-4 px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500"
          >
            Cari
          </button>
        </div>

        {/* Donasi Summary */}
        <div className="flex space-x-6 mb-8">
          {/* Total Donasi */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between w-1/3">
            <div>
              <h5 className="text-xl font-semibold">Total Donasi</h5>
              <p className="text-[#3B9E3F]">Rp 2,800,000</p>
            </div>
            <i className="fas fa-hand-holding-heart text-4xl text-green-600"></i>
          </div>

          {/* Donasi Terbaru */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between w-1/3">
            <div>
              <h5 className="text-xl font-semibold">Donasi Terbaru</h5>
              <p className='text-[#3B9E3F]'>Rp 300,000</p>
            </div>
            <i className="fas fa-clock text-4xl text-yellow-600"></i>
          </div>

          {/* Donatur Terdaftar */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between w-1/3">
            <div>
              <h5 className="text-lg font-semibold">Donasi Terdaftar</h5>
              <p className='text-[#3B9E3F]'>5 Donatur</p>
            </div>
            <i className="fas fa-users text-4xl text-blue-600"></i>
          </div>
        </div>

        {/* Donasi Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
          <table className="w-full border-collapse">
            <thead className="bg-[#3B9E3F] text-white">
              <tr>
                <th className="px-4 py-2 text-center border">No</th>
                <th className="px-4 py-2 text-center border">Nama Donatur</th>
                <th className="px-4 py-2 text-center border">Jumlah Donasi</th>
                <th className="px-4 py-2 text-center border">Tanggal Donasi</th>
                <th className="px-4 py-2 text-center border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">1</td>
                <td className="px-4 py-2 border">Andi Wijaya</td>
                <td className="px-4 py-2 border text-center">Rp 500,000</td>
                <td className="px-4 py-2 border text-center">2024-11-25</td>
                <td className="px-4 py-2 border text-center">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Tervalidasi</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">2</td>
                <td className="px-4 py-2 border">Rina Sari</td>
                <td className="px-4 py-2 border text-center">Rp 250,000</td>
                <td className="px-4 py-2 border text-center">2024-11-24</td>
                <td className="px-4 py-2 border text-center">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-lg">Menunggu Verifikasi</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">3</td>
                <td className="px-4 py-2 border">Joko Santoso</td>
                <td className="px-4 py-2 border text-center">Rp 750,000</td>
                <td className="px-4 py-2 border text-center">2024-11-23</td>
                <td className="px-4 py-2 border text-center">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Tervalidasi</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">4</td>
                <td className="px-4 py-2 border">Nia Kurnia Sari</td>
                <td className="px-4 py-2 border text-center">Rp 1,000,000</td>
                <td className="px-4 py-2 border text-center">2024-11-23</td>
                <td className="px-4 py-2 border text-center">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-lg">Tervalidasi</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">5</td>
                <td className="px-4 py-2 border">Agus</td>
                <td className="px-4 py-2 border text-center">Rp 300,000</td>
                <td className="px-4 py-2 border text-center">2024-11-23</td>
                <td className="px-4 py-2 border text-center">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-lg">Menunggu Verifikasi</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonasiAdmin;
