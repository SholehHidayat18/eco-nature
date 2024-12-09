import React, { useEffect, useState } from 'react';
import { FaBell, FaUser, FaUsers } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';
import RelawanService from '../../service/RelawanService';
import Swal from 'sweetalert2';

const RelawanAdmin = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [relawanData, setRelawanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelawans = async () => {
      try {
        setLoading(true);
        const data = await RelawanService.getRelawans();
        setRelawanData(data);
        setLoading(false);
      } catch (err) {
        setError('Gagal memuat data relawan');
        setLoading(false);
      }
    };

    fetchRelawans();
  }, []);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Yakin ingin menghapus relawan ini?',
      text: 'Tindakan ini tidak dapat diurungkan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await RelawanService.deleteRelawans(id);
          Swal.fire('Dihapus!', 'Relawan berhasil dihapus.', 'success');
          const data = await RelawanService.getRelawans();
          setRelawanData(data);
        } catch (err) {
          Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus data.', 'error');
        }
      }
    });
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>;
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
            <button href="#" className="text-[#3B9E3F] hover:text-gray-700">
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
              <p className="text-[#3B9E3F]">{relawanData.length} Relawan</p>
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
                  <td className="text-center px-4 py-2 border">{relawan.noHandphone}</td>
                  <td className="text-center px-4 py-2 border">{relawan.formattedDate}</td>
                  <td className="text-center px-4 py-2 border">
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
