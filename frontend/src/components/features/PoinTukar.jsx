import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const PoinTukar = () => {
  const vouchers = [
    {
      id: 1,
      title: "Voucher Potongan Harga Acara",
      value: "10 ribu",
      slug: "poin-tukar-detail"
    },
    {
      id: 2,
      title: "Voucher Potongan Harga Acara",
      value: "10 ribu",
      slug: "voucher-sejuta-pohon-10rb-batch2"
    },
    {
      id: 3,
      title: "Voucher Potongan Harga Acara",
      value: "10 ribu",
      slug: "voucher-sejuta-pohon-10rb-batch3"
    },
    {
      id: 4,
      title: "Voucher Potongan Harga Acara",
      value: "10 ribu",
      slug: "voucher-sejuta-pohon-10rb-batch4"
    }
  ];

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
                        Beranda &raquo; Fitur &raquo; Poin &raquo; Penukaran Poin
                    </nav>
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-semibold text-[#3B9E3F] mb-8">Penukaran Poin</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {vouchers.map((voucher) => (
            <div key={voucher.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="mb-4">
                <i className="bi bi-ticket-perforated text-[#3B9E3F] text-5xl"></i>
                </div>

                <div className="text-center mb-4">
                <h3 className="font-semibold text-xl mb-2">{voucher.title}</h3>
                <p className="text-lg">{voucher.value}</p>
                </div>

                <Link 
                to={`/${voucher.slug}`}
                className="bg-[#3B9E3F] text-white px-6 py-2 rounded hover:bg-green-700 transition-colors uppercase text-sm font-medium"
                >
                Lihat Detail
                </Link>
            </div>
            ))}
        </div>

        <div className="flex justify-center gap-2 mb-10">
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

        <div className="max-w-md mx-auto mb-14">
            <Link 
            to="/"
            className="block w-full bg-[#3B9E3F] text-white py-3 rounded-lg hover:bg-green-700 transition-colors uppercase font-medium text-center"
            >
            Kembali Keberanda
            </Link>
        </div>
        </div>
    </div>
  );
};

export default PoinTukar;