import React from 'react';
import { FaBell, FaUser, FaCogs, FaTachometerAlt, FaHandHoldingHeart, FaBookOpen, FaUsers, FaExclamationCircle, FaGift, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';

const PengaduanAdmin = () => {
    const searchPengaduan = () => {
        const searchValue = document.getElementById("search").value.toLowerCase();
        const rows = document.querySelectorAll("tbody tr");
    
        rows.forEach((row) => {
          const judulpengaduanTitle = row.cells[1].textContent.toLowerCase();
          if (judulpengaduanTitle.includes(searchValue)) {
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
                        <FaExclamationCircle className="text-3xl mr-4" />
                        <div>
                            <h1 className="text-3xl font-semibold">Pengaduan</h1>
                            <p className="text-lg">Melihat dan menanggapi pengaduan dari pengguna terkait layanan.</p>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex justify-between items-center mb-6">
                    <input 
                        type="text" 
                        id="search" 
                        placeholder="Cari pengaduan..." 
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
                    />
                    <button 
                        onClick={searchPengaduan} 
                        className="ml-4 px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500"
                    >
                        Cari
                    </button>
                </div>

                {/* Status Summary */}
                <div className="mb-6">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-lg mr-4">Ditanggapi: 3</span>
                    <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-4">Pending: 2</span>
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg">Ditolak: 1</span>
                </div>

                {/* Table Pengaduan */}
                <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
                    <table className="w-full border-collapse">
                        <thead className="bg-[#3B9E3F] text-white">
                            <tr>
                                <th className="px-4 py-2 border">No</th>
                                <th className="px-4 py-2 border">Judul Pengaduan</th>
                                <th className="px-4 py-2 border">Tanggal</th>
                                <th className="px-4 py-2 border">Nama Pengadu</th>
                                <th className="px-4 py-2 border">Status</th>
                                <th className="px-4 py-2 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-2 border text-center">1</td>
                                <td className="px-4 py-2 border">Sampah yang Menumpuk di Tepi Jalan</td>
                                <td className="px-4 py-2 border text-center">2024-05-21</td>
                                <td className="px-4 py-2 border text-center">Ramadhan Fikri</td>
                                <td className="px-4 py-2 border text-center">
                                    <span className="bg-green-600 text-white px-3 py-1 rounded-lg">Diterima</span></td>
                                <td className="px-4 py-2 border text-center">
                                    <a href="/admin/EditPengaduanAdmin" className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-2">Edit</a>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border text-center">2</td>
                                <td className="px-4 py-2 border">Sampah yang Menumpuk di Tepi Sungai</td>
                                <td className="px-4 py-2 border text-center">2024-01-21</td>
                                <td className="px-4 py-2 border text-center">Kefine Putra</td>
                                <td className="px-4 py-2 border text-center">
                                    <span className="bg-green-800 text-white px-3 py-1 rounded-lg">Selesai</span></td>
                                <td className="px-4 py-2 border text-center">
                                    <a href="/admin/EditPengaduanAdmin" className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-2">Edit</a>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border text-center">3</td>
                                <td className="px-4 py-2 border">Sampah yang Menumpuk di Sekitaran Pasar</td>
                                <td className="px-4 py-2 border text-center">2024-07-21</td>
                                <td className="px-4 py-2 border text-center">Putri Alexa</td>
                                <td className="px-4 py-2 border text-center">
                                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-lg">Sedang Diproses</span></td>
                                <td className="px-4 py-2 border text-center">
                                    <a href="/admin/EditPengaduanAdmin" className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-2">Edit</a>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border text-center">4</td>
                                <td className="px-4 py-2 border">Sampah yang Menumpuk di Sekitaran Jembatan</td>
                                <td className="px-4 py-2 border text-center">2024-10-30</td>
                                <td className="px-4 py-2 border text-center">Pratama Putra</td>
                                <td className="px-4 py-2 border text-center">
                                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-lg">Sedang Diproses</span></td>
                                <td className="px-4 py-2 border text-center">
                                    <a href="/admin/EditPengaduanAdmin" className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-2">Edit</a>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border text-center">5</td>
                                <td className="px-4 py-2 border">Sampah yang Menumpuk di Pembuangan Sampah</td>
                                <td className="px-4 py-2 border text-center">2024-03-2</td>
                                <td className="px-4 py-2 border text-center">Bambang Asep</td>
                                <td className="px-4 py-2 border text-center">
                                    <span className="bg-green-800 text-white px-3 py-1 rounded-lg">Selesai</span></td>
                                <td className="px-4 py-2 border text-center">
                                    <a href="/admin/EditPengaduanAdmin" className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-2">Edit</a>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border text-center">6</td>
                                <td className="px-4 py-2 border">Sampah yang Menumpuk di Tepi Jalan</td>
                                <td className="px-4 py-2 border text-center">2024-10-21</td>
                                <td className="px-4 py-2 border text-center">Chantika Putri</td>
                                <td className="px-4 py-2 border text-center">
                                    <span className="bg-green-600 text-white px-3 py-1 rounded-lg">Diterima</span></td>
                                <td className="px-4 py-2 border text-center">
                                    <a href="/admin/EditPengaduanAdmin" className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-2">Edit</a>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PengaduanAdmin;
