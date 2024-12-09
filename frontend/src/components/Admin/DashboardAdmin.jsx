import React, { useEffect, useState } from "react";
import { FaTachometerAlt, FaHandHoldingHeart, FaUsers, FaExclamationCircle, FaBell, FaUser, FaTimes } from 'react-icons/fa';

import NavbarAdmin from "../NavbarAdmin";
import PaymentService from '../../service/PaymentService';
import RelawanService from '../../service/RelawanService';
import PengaduanService from '../../service/PengaduanService';

const Notification = ({ onClose }) => {
  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-3 rounded-md shadow-md z-50">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Donasi baru masuk: Rp 500.000</p>
          <p className="font-medium">Relawan baru terdaftar: Ahmad</p>
          <p className="font-medium">Pengaduan baru: Penumpukan Sampah</p>
        </div>
        <button className="text-white hover:text-gray-300 focus:outline-none" onClick={onClose}>
          <FaTimes size={18} />
        </button>
      </div>
    </div>
  );
};

const DashboardAdmin = () => {
  const [relawanData, setRelawanData] = useState([]);
  const [pengaduans, setPengaduans] = useState([]);
  const [donationData, setDonationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPengaduans = async () => {
      try {
        const data = await PengaduanService.getPengaduan();
        setPengaduans(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch pengaduans');
        setIsLoading(false);
      }
    };

    fetchPengaduans();
  }, []);
  useEffect(() => {
    const fetchRelawans = async () => {
      try {
        setIsLoading(true);
        const data = await RelawanService.getRelawans();
        setRelawanData(data);
        setIsLoading(false);
      } catch (err) {
        setError('Gagal memuat data relawan');
        setIsLoading(false);
      }
    };

    fetchRelawans();
  }, []);
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

  const pengaduansDiproses = pengaduans.filter(pengaduan => pengaduan.status === 'Diproses');

  const totalDonasi = donationData
    .filter((payment) => payment.status === 'Diterima')
    .reduce((total, payment) => total + payment.total, 0);

  const [showNotification, setShowNotification] = useState(false);

  const closeNotification = () => {
    setShowNotification(false);
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
        </nav>

        {/* Header */}
        <header className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow mb-6 mt-16">
          <div className="flex items-center">
            <FaTachometerAlt className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="mt-1">Selamat datang kembali, admin! Berikut adalah ringkasan data terbaru.</p>
            </div>
          </div>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-blue-500 text-white rounded-lg p-4 h-[150px] shadow-md hover:scale-105 transition-transform flex items-center justify-between">
            <div>
              <h5 className="text-lg font-semibold">Total Donasi</h5>
              <p className="text-xl">Rp {totalDonasi.toLocaleString()}</p>
            </div>
            <div className="flex items-center justify-center h-full">
              <FaHandHoldingHeart className="text-7xl" />
            </div>
          </div>

          <div className="bg-teal-500 text-white rounded-lg p-4 h-[150px] shadow-md hover:scale-105 transition-transform flex items-center justify-between">
            <div>
              <h5 className="text-lg font-semibold">Donatur Terdaftar</h5>
              <p className="text-xl">{donationData.length} orang</p>
            </div>
            <div className="flex items-center justify-center h-full">
              <FaUsers className="text-7xl" />
            </div>
          </div>

          <div className="bg-green-500 text-white rounded-lg p-4 h-[150px] shadow-md hover:scale-105 transition-transform flex items-center justify-between">
            <div>
              <h5 className="text-lg font-semibold">Relawan Terdaftar</h5>
              <p className="text-xl">{relawanData.length} orang</p>
            </div>
            <div>
              <i className="bi bi-person-check-fill text-7xl"></i>
            </div>
          </div>

          <div className="bg-yellow-500 text-white rounded-lg p-4 h-[150px] shadow-md hover:scale-105 transition-transform flex items-center justify-between">
            <div>
              <h5 className="text-lg font-semibold">Pengaduan</h5>
              <p className="text-xl">{pengaduansDiproses.length} pengaduan baru</p>
            </div>
            <div>
              <FaExclamationCircle className="text-7xl" />
            </div>
          </div>
        </div>
        {showNotification && <Notification onClose={closeNotification} />}
      </div>
    </div>
  );
};

export default DashboardAdmin;
