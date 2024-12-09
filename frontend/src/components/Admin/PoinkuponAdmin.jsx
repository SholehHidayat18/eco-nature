import React, { useState } from 'react';
import { FaBell, FaUser, FaGift, } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';

const PoinkuponAdmin = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const searchPoinKupon = () => {
        alert('Searching for: ' + searchQuery);
    }

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
                        <button className="text-[#3B9E3F] hover:text-gray-700">
                            <FaBell className="text-2xl" />
                        </button>
                        <a href="/admin/ProfileAdmin" className="text-[#3B9E3F] hover:text-gray-700">
                            <FaUser className="text-2xl" />
                        </a>
                    </div>
                </nav>

                {/* Header */}
                <div className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow mb-6 mt-16">
                    <div className="flex items-center">
                        <FaGift className="text-3xl mr-4" />
                        <div>
                            <h1 className="text-3xl font-semibold">Poin & Kupon</h1>
                            <p className="text-lg">Kelola poin yang didapat oleh pengguna dan kupon yang dapat digunakan.</p>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex items-center mb-6">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari Poin atau Kupon..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <button onClick={searchPoinKupon}
                        className="ml-4 px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500">
                        Cari
                    </button>
                </div>

                {/* Poin & Kupon Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
                        <div>
                            <h5 className="text-xl font-semibold">Total Poin</h5>
                            <p className="text-[#3B9E3F]">2,000 Poin</p>
                        </div>
                        <i className="fas fa-newspaper text-4xl text-green-500"></i>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
                        <div>
                            <h5 className="text-xl font-semibold">Total Kupon</h5>
                            <p className="text-[#3B9E3F]">3 Kupon</p>
                        </div>
                        <i className="fas fa-check-circle text-4xl text-green-500"></i>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
                    <table className="w-full border-collapse">
                        <thead className="bg-[#3B9E3F] text-white">
                            <tr>
                                <th className="px-4 py-2 border">No</th>
                                <th className="px-4 py-2 border">Nama Pengguna</th>
                                <th className="px-4 py-2 border">Tipe</th>
                                <th className="px-4 py-2 border">Status</th>
                                <th className="px-4 py-2 border">Tanggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-2 border text-center">1</td>
                                <td className="px-4 py-2 border">Jane Doe</td>
                                <td className="px-4 py-2 border text-center">Poin</td>
                                <td className="px-4 py-2 border text-center"><span className="bg-green-600 text-white px-3 py-1 rounded-lg">Aktif</span></td>
                                <td className="px-4 py-2 border text-center">12 November 2024</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border text-center">2</td>
                                <td className="px-4 py-2 border">Jhon Smith</td>
                                <td className="px-4 py-2 border text-center">Kupon</td>
                                <td className="px-4 py-2 border text-center"><span className="bg-red-500 text-white px-3 py-1 rounded-lg">Tidak Aktif</span></td>
                                <td className="px-4 py-2 border text-center">10 November 2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PoinkuponAdmin;
