import React, { useState } from 'react';

const Privacy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <h2 className="text-center text-2xl font-bold mb-2">Layanan dan Kebijakan Privasi</h2>
        <h2 className="text-center text-2xl font-bold mb-4">Pengaduan Sampah - <span className="text-[#33691E]">EcoNature</span></h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Layanan Pengaduan:</h3>
            <ul className="list-disc pl-5 space-y-2 ml-8">
              <li>Laporan Sampah: Laporkan tumpukan sampah yang tidak terkelola di sekitar Anda.</li>
              <li>Update Status: Dapatkan informasi status laporan Anda (Diterima, Diproses, Selesai).</li>
              <li>Notifikasi: Pemberitahuan terkini mengenai tindak lanjut laporan Anda.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Kebijakan Privasi:</h3>
            <ul className="list-disc pl-5 space-y-2 ml-8">
              <li>Data yang Dikumpulkan: Nama, kontak, dan lokasi pengaduan.</li>
              <li>Penggunaan Data: Hanya untuk verifikasi laporan dan pemberitahuan status.</li>
              <li>Keamanan Data: Data Anda aman dan tidak akan dibagikan untuk kepentingan komersial.</li>
            </ul>
          </div>
          <p className="text-lg text-center">Dengan melapor, Anda setuju dengan layanan dan kebijakan privasi ini.</p>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors mt-8"
        >
          <i className="bi bi-x-lg mr-2"></i>
          Tutup
        </button>
      </div>
    </div>
  );
};

const KebijakanPrivasi = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePrivacyClick = (e) => {
    e.preventDefault(); // Mencegah perilaku default
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handlePrivacyClick}
        className="text-[#3B9E3F] hover:underline"
      >
        Layanan & Kebijakan Privasi
      </button>
      <Privacy
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default KebijakanPrivasi;
