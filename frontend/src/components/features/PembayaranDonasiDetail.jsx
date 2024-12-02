import React, { useState } from 'react';

const PembayaranDonasiDetail = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAmount] = useState(null);

  const handleConfirmDonation = () => {
    console.log('Memproses donasi sebesar:', selectedAmount);
    setShowPopup(false);
  };

  const handleCancelDonation = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-white ">
        <div className="relative h-96 overflow-hidden mb-10">
            <img 
                src="/images/header.jpg"
                alt="Waterfall"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0">
                <div className="container mx-auto px-6 h-full flex flex-col justify-center">
                    <h1 className="text-6xl md:text-5xl text-white font-bold mb-4 ml-16">
                        Econature: Bersama untuk Bumi yang <br /> Lebih Lestari
                    </h1>
                    <nav className="text-white/90 text-2xl ml-16">
                        Beranda &raquo; Fitur &raquo; Donasi
                    </nav>
                </div>
            </div>
        </div>

      <div className="container max-w-6xl mx-auto p-6 mb-4">
        <div>
          <h2 className="text-2xl font-bold">Metode Pembayaran</h2>
          <div className="mt-4">
            <input type="checkbox" id="payment" className="mr-2" />
            <label htmlFor="payment" className="text-gray-700">
              Pembayaran Non Tunai
            </label>
            <div className="mt-4">
              <img
                src="/images/bca.png"
                alt="BCA Logo"
                className="w-24"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Komentar Anda</h2>
          <textarea className="border border-gray-300 w-full h-32 p-2 mt-2 rounded"></textarea>
        </div>
        <div className="mt-4">
          <input type="checkbox" id="anonymous" className="mr-2" />
          <label htmlFor="anonymous" className="text-gray-700">
            Centang Kotak Ini untuk Donatur Anonim
          </label>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Detail Donatur</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Nama Depan"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Nama Belakang"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Masukkan Alamat Email"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Nomor Handphone"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 mb-8">
        <button
          className="bg-green-700 text-white px-6 py-2 rounded"
          onClick={() => setShowPopup(true)}
        >
          LANJUTKAN UNTUK BERDONASI
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Apakah anda yakin untuk berdonasi?</h2>
            {selectedAmount && (
              <p className="mb-4">Jumlah donasi yang dipilih: Rp {selectedAmount}</p>
            )}
            <div className="flex justify-between">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelDonation}
              >
                TIDAK
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleConfirmDonation}
              >
                <a href="/pembayaran-donasi-detail">YA</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default PembayaranDonasiDetail;