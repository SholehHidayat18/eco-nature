import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PoinRiwayat = () => {
  return (
    <div className="min-h-screen bg-white">
        <div className="relative h-96 overflow-hidden mb-12">
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
                        Beranda &raquo; Fitur &raquo; Poin &raquo; Riwayat Poin
                    </nav>
                </div>
            </div>
        </div>

        <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-[#3B9E3F] mb-4">Riwayat Poin</h1>
            <div className="flex items-center justify-center gap-2">
            <span className="text-gray-600">Total Poin</span>
            <div className="flex items-center">
                <i className="bi bi-coin text-yellow-400 text-xl mr-2"></i>
                <span className="text-4xl text-[#3B9E3F]">500</span>
            </div>
            </div>
        </div>

        <div className="mb-8">
            <h2 className="text-2xl text-[#3B9E3F] font-semibold border-b-2 pb-2 mb-4">
            September 2024
            </h2>

            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-center">
                <div>
                <div className="text-gray-600 mb-1">Pengumpulan Poin</div>
                <div className="font-semibold">
                    Kontribusi Acara "Hari Sejuta Pohon"
                </div>
                </div>
                <div className="flex flex-col items-end">
                <span className="text-gray-500 text-sm mb-1">27 September 2024</span>
                <div className="flex items-center">
                    <span className="text-[#3B9E3F] font-bold mr-2">10 poin</span>
                    <i className="bi bi-coin text-yellow-400"></i>
                </div>
                </div>
            </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center">
                <div>
                <div className="text-gray-600 mb-1">Tukarkan Poin</div>
                <div className="font-semibold">
                    Penukaran poin : Voucher Potongan Harga Acara 10ribu
                </div>
                </div>
                <div className="flex flex-col items-end">
                <span className="text-gray-500 text-sm mb-1">29 September 2024</span>
                <div className="flex items-center">
                    <span className="text-[#9A0606] font-bold mr-2">-10 poin</span>
                    <i className="bi bi-coin text-yellow-400"></i>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="mb-8">
            <h2 className="text-2xl text-[#3B9E3F] font-semibold border-b-2 pb-2 mb-4">
            Agustus 2024
            </h2>

            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center">
                <div>
                <div className="text-gray-600 mb-1">Pengumpulan Poin</div>
                <div className="font-semibold">
                    Kontribusi Acara "Hari Sejuta Pohon"
                </div>
                </div>
                <div className="flex flex-col items-end">
                <span className="text-gray-500 text-sm mb-1">27 Agustus 2024</span>
                <div className="flex items-center">
                    <span className="text-[#3B9E3F] font-bold mr-2">10 poin</span>
                    <i className="bi bi-coin text-yellow-400"></i>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="flex justify-center gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
            <i className="bi bi-chevron-left"></i>
            </button>
            <button className="px-3 py-1 border rounded bg-[#3B9E3F] text-white">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
            <i className="bi bi-chevron-right"></i>
            </button>
        </div>

        <div className="mt-12 mb-14">
            <button className="w-full bg-[#3B9E3F] text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
            <a href="/">KEMBALI KEBERANDA</a>
            </button>
        </div>
        </div>
    </div>
  );
};

export default PoinRiwayat;