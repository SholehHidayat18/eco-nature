import React, { useState } from 'react';
import { FaBell, FaUser, FaTachometerAlt, FaHandHoldingHeart, FaBookOpen, FaUsers, FaExclamationCircle, FaGift, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';

const RelawanAdmin = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const relawanData = [
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '+628123456789', joined: '12-Nov-2024' },
    { id: 2, name: 'John Smith', email: 'john.smith@example.com', phone: '+628987654321', joined: '15-Nov-2024' },
  ];

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  const handleDelete = (id) => {
    alert(`Delete relawan with id: ${id}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#3B9E3F] text-white p-6 mt-14">
        <NavbarAdmin />
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
            <FaUsers className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-semibold mb-2">Relawan</h1>
              <p className="text-lg">Kelola data relawan yang aktif dalam kegiatan EcoNature.</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            id="search"
            placeholder="Cari relawan..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-4 px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500"
          >
            Cari
          </button>
        </div>

        {/* Relawan Summary */}
        <div className="flex mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center w-1/3 mr-4">
            <div>
              <h5 className="text-xl font-semibold">Total Relawan</h5>
              <p className="text-[#3B9E3F]">120 Relawan</p>
            </div>
            <i className="fas fa-book text-4xl text-green-600 ml-4"></i>
          </div>
        </div>

        {/* Relawan Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
          <table className="w-full border-collapse">
            <thead className="bg-[#3B9E3F] text-white">
              <tr>
                <th className="px-4 py-2 text-center">No</th>
                <th className="px-4 py-2 text-center">Nama Relawan</th>
                <th className="px-4 py-2 text-center">Email</th>
                <th className="px-4 py-2 text-center">Nomor Telepon</th>
                <th className="px-4 py-2 text-center">Tanggal Bergabung</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {relawanData.map((relawan, index) => (
                <tr key={relawan.id}>
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{relawan.name}</td>
                  <td className="px-4 py-2 border text-center">{relawan.email}</td>
                  <td className="text-center px-4 py-2 border">{relawan.phone}</td>
                  <td className="text-center px-4 py-2 border">{relawan.joined}</td>
                  <td className="text-center px-4 py-2 border">
                    <a href="/admin/EditRelawanAdmin" className="btn btn-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Edit</a>
                    <button
                      onClick={() => handleDelete(relawan.id)}
                      className="ml-2 btn btn-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RelawanAdmin;
