import React from 'react';

const Poin = () => {
  return (
    <div className="min-h-screen bg-white">
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
                      Beranda &raquo; Poin
                  </nav>
              </div>
          </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Kumpulkan Pointnya</h2>
          <h1 className="text-4xl font-bold text-[#3B9E3F]">Dapatkan Benefitnya</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="bi bi-droplet-fill text-[#3B9E3F] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-500 mb-2">
                    Dapatkan Poin dengan Mudah
                  </h3>
                  <p className="text-gray-600">
                    Kumpulkan Poin dengan bergabung dalam keanggotaan EcoNature, ikuti komunitasnya, dan berkontribusi berbagai acara seru
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#3B9E3F] rounded-full flex items-center justify-center text-white">
                  1
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="bi bi-cash-stack text-[#3B9E3F] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-500 mb-2">
                    Konversi Poin yang Menarik
                  </h3>
                  <p className="text-gray-600">
                    Tukarkan poin yang kamu kumpulkan dengan voucher dan diskon spesial di acara tahunan kami
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#3B9E3F] rounded-full flex items-center justify-center text-white">
                  2
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#3B9E3F] rounded-lg p-6 text-white">
            <h3 className="text-2xl font-bold mb-6">Poin Saya</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama Pengguna"
                className="w-full p-3 rounded-md text-gray-800"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Total Poin"
                  className="w-full p-3 rounded-md text-gray-800"
                />
                <i className="bi bi-coin text-yellow-400 absolute right-3 top-1/2 transform -translate-y-1/2 text-xl"></i>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-[#3B9E3F] hover:bg-green-700 py-2 px-2 rounded-md transition duration-300 text-sm mt-4">
                  <a href="/PoinRiwayat">LIHAT RIWAYAT</a>
                </button>
                <button className="bg-[#3B9E3F] hover:bg-green-700 py-2 px-2 rounded-md transition duration-300 text-sm mt-4">
                  <a href="/PoinTukar">PENUKARAN POIN</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-2">Bagaimana cara mendapatkan</h2>
          <h2 className="text-4xl font-bold text-[#3B9E3F] mb-12">Econature Poin?</h2>
          
          <div className="relative">
            
            <div className="grid md:grid-cols-5 gap-8 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-[#3B9E3F] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <p className="text-gray-600">Bergabung menjadi anggota baru di Econature</p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-[#3B9E3F] -translate-y-1/2"></div>
              </div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-[#3B9E3F] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <p className="text-gray-600">Aksi Nyata menjadi bagian dari Relawan</p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-[#3B9E3F] -translate-y-1/2"></div>
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-[#3B9E3F] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <p className="text-gray-600">Dapatkan Poin dan hadian menarik lainnya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poin;