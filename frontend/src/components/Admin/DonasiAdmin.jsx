import React, { useEffect, useState } from 'react';
import { FaBell, FaUser, FaHandHoldingHeart } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';
import PaymentService from '../../service/PaymentService';
import Swal from 'sweetalert2';
import TabelDonasi from './TabelDonasi';

const DonasiAdmin = () => {
  const [donationData, setDonationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setIsLoading(true);
        const response = await PaymentService.getPayments();
        setDonationData(response);
      } catch (err) {
        setError('Terjadi kesalahan saat memuat data donasi.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const totalDonasi = donationData
    .filter((payment) => payment.status === 'Diterima')
    .reduce((total, payment) => total + payment.total, 0);

  const donasiTerbaru = donationData
    .filter((payment) => payment.status === 'Diproses')
    .reduce((total, payment) => total + payment.total, 0);

  const searchDonasi = () => {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach((row) => {
      const donaturName = row.cells[1].textContent.toLowerCase();
      if (donaturName.includes(searchValue)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  };

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
        const updatedPengaduan = await PaymentService.updatePayment(id, { status });
        if (updatedPengaduan) {
          const data = await PaymentService.getPayments();
          setDonationData(data);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-[#3B9E3F]">Memuat data...</p>
          <div className="spinner-border animate-spin border-4 border-t-4 border-[#3B9E3F] rounded-full w-12 h-12 mx-auto my-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </div>
    );
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
        <div className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow-md mb-6 mt-16">
          <div className="flex items-center">
            <FaHandHoldingHeart className="text-3xl mr-4" />
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
              <p className="text-[#3B9E3F]">Rp {totalDonasi.toLocaleString()}</p>
            </div>
            <i className="fas fa-hand-holding-heart text-4xl text-green-600"></i>
          </div>

          {/* Donasi Terbaru */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between w-1/3">
            <div>
              <h5 className="text-xl font-semibold">Donasi Terbaru</h5>
              <p className="text-[#3B9E3F]">Rp {donasiTerbaru.toLocaleString()}</p>
            </div>
            <i className="fas fa-clock text-4xl text-yellow-600"></i>
          </div>

          {/* Donatur Terdaftar */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between w-1/3">
            <div>
              <h5 className="text-lg font-semibold">Donasi Terdaftar</h5>
              <p className="text-[#3B9E3F]">{donationData.length} Donatur</p>
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
                <th className="px-4 py-2 text-center border">Tujuan Donasi</th>
                <th className="px-4 py-2 text-center border">Nama Donatur</th>
                <th className="px-4 py-2 text-center border">Jumlah Donasi</th>
                <th className="px-4 py-2 text-center border">Tanggal Donasi</th>
                <th className="px-4 py-2 text-center border">Status</th>
                <th className="px-4 py-2 text-center border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {donationData.map((payment, index) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{payment.donation.title}</td>
                  <td className="px-4 py-2 border">{payment.name}</td>
                  <td className="px-4 py-2 border text-center">Rp {payment.total.toLocaleString()}</td>
                  <td className="px-4 py-2 border text-center">{payment.formattedCreatedAt}</td>
                  <td className="px-4 py-2 border text-center">
                    <span className={`px-3 py-1 rounded-lg 
                     ${payment.status === 'Diterima' ? 'bg-green-500' :
                        payment.status === 'Diproses' ? 'bg-yellow-500' :
                          payment.status === 'Ditolak' ? 'bg-red-500' : 'bg-gray-500'} text-white`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {/* Tombol untuk memvalidasi atau memproses */}
                    {payment.status === 'Diproses' ? (
                      <>
                        <button
                          onClick={() => updateStatus(payment.id, 'Diterima')}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-2"
                        >
                          Diterima
                        </button>
                        <button
                          onClick={() => updateStatus(payment.id, 'Ditolak')}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Ditolak
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => updateStatus(payment.id, 'Diproses')}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                      >
                        Proses
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <TabelDonasi />
      </div>
    </div>
  );
};

export default DonasiAdmin;
