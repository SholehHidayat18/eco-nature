import React, { useEffect, useState } from 'react';
import { FaBell, FaUser, FaExclamationCircle } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';
import PengaduanService from '../../service/PengaduanService';
import Swal from 'sweetalert2';

const PengaduanAdmin = () => {
    const [pengaduans, setPengaduans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPengaduans = async () => {
            try {
                const data = await PengaduanService.getPengaduan();
                setPengaduans(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch pengaduans');
                setLoading(false);
            }
        };

        fetchPengaduans();
    }, []);

    // Fungsi untuk memperbarui status
    const updateStatus = async (id, status) => {
        try {
            const result = await Swal.fire({
                title: 'Apakah Anda yakin?',
                text: `Status pengaduan akan diubah menjadi ${status}.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Ubah!',
                cancelButtonText: 'Batal',
            });

            if (result.isConfirmed) {
                const updatedPengaduan = await PengaduanService.updatePengaduan(id, { status });
                if (updatedPengaduan) {
                    const data = await PengaduanService.getPengaduan();
                    setPengaduans(data);

                    // Tampilkan notifikasi berhasil
                    Swal.fire({
                        title: 'Berhasil!',
                        text: `Status pengaduan berhasil diubah menjadi ${status}.`,
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                    });
                }
            }
        } catch (err) {
            console.error('Failed to update status:', err);

            // Tampilkan notifikasi error
            Swal.fire({
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat memperbarui status.',
                icon: 'error',
                confirmButtonColor: '#d33',
            });
        }
    };

    // Hitung jumlah pengaduan berdasarkan status
    const countByStatus = (status) => {
        return pengaduans.filter((item) => item.status === status).length;
    };

    const searchPengaduan = () => {
        const searchValue = document.getElementById('search').value.toLowerCase();
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach((row) => {
            const judulpengaduanTitle = row.cells[1].textContent.toLowerCase();
            if (judulpengaduanTitle.includes(searchValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-[#3B9E3F] text-white p-6 mt-14">
                <NavbarAdmin />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
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

                <div className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow mb-6 mt-16">
                    <div className="flex items-center">
                        <FaExclamationCircle className="text-3xl mr-4" />
                        <div>
                            <h1 className="text-3xl font-semibold">Pengaduan</h1>
                            <p className="text-lg">Melihat dan menanggapi pengaduan dari pengguna terkait layanan.</p>
                        </div>
                    </div>
                </div>

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

                <div className="mb-6">
                    <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-4">
                        Diproses: {countByStatus('Diproses')}
                    </span>
                    <span className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4">
                        Selesai: {countByStatus('Selesai')}
                    </span>
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Ditolak: {countByStatus('Ditolak')}
                    </span>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
                    <table className="w-full border-collapse">
                        <thead className="bg-[#3B9E3F] text-white">
                            <tr>
                                <th className="px-4 py-2 border">No</th>
                                <th className="px-4 py-2 border">Deskripsi Pengaduan</th>
                                <th className="px-4 py-2 border">Tanggal</th>
                                <th className="px-4 py-2 border">Nama Pengadu</th>
                                <th className="px-4 py-2 border">Status</th>
                                <th className="px-4 py-2 border">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pengaduans.map((pengaduan, index) => (
                                <tr key={pengaduan.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                                    <td className="px-4 py-2 border">{pengaduan.description}</td>
                                    <td className="px-4 py-2 border text-center">{pengaduan.formattedDate}</td>
                                    <td className="px-4 py-2 border text-center">{pengaduan.name}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <span
                                            className={`px-3 py-1 rounded-lg ${pengaduan.status === 'Diproses'
                                                ? 'bg-yellow-500'
                                                : pengaduan.status === 'Selesai'
                                                    ? 'bg-green-600'
                                                    : 'bg-red-500'
                                                } text-white`}
                                        >
                                            {pengaduan.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 border text-center">
                                        {pengaduan.status === 'Diproses' ? (
                                            <>
                                                <button
                                                    onClick={() => updateStatus(pengaduan.id, 'Selesai')}
                                                    className="px-3 py-1 bg-green-500 text-white rounded-lg mr-2    "
                                                >
                                                    Selesai
                                                </button>
                                                <button
                                                    onClick={() => updateStatus(pengaduan.id, 'Ditolak')}
                                                    className="px-3 py-1 bg-red-500 text-white rounded-lg mt-2"
                                                >
                                                    Ditolak
                                                </button>
                                            </>
                                        ) : (
                                            <span className="text-gray-500">Tidak ada aksi</span>
                                        )}
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

export default PengaduanAdmin;
