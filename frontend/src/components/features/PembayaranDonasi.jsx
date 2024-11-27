import React from 'react';

const PembayaranDonasi = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative h-96 overflow-hidden mb-8">
        <img
          src="/images/header.jpg"
          alt="Waterfall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-4xl text-white font-bold mb-4 ml-16">
              Econature: Bersama untuk Bumi yang <br /> Lebih Lestari
            </h1>
            <nav className="text-white/90 text-lg ml-16">
              Beranda &raquo; Fitur &raquo; Donasi &raquo; 
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        {/* Jumlah Donasi */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Jumlah Donasi</h2>
          <div className="flex mt-4">
            {["5rb", "10rb", "25rb", "50rb", "75rb", "100rb", "150rb"].map((amount) => (
              <button key={amount} className="bg-gray-200 text-gray-700 px-4 py-2 m-1 rounded">
                {amount}
              </button>
            ))}
            <input
              type="text"
              placeholder="Rp Lainnya"
              className="border border-gray-300 px-4 py-2 m-1 rounded w-1/4"
            />
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="mt-8">
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

        {/* Komentar */}
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

        {/* Detail Donatur */}
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

        {/* Tombol Donasi */}
        <div className="flex items-center justify-center mt-6 mb-10">
          <button className="bg-green-700 text-white px-6 py-2 rounded ">
            LANJUTKAN UNTUK BERDONASI
          </button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranDonasi;
