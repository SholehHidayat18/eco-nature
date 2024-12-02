import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PoinTukarDetail = () => {
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

        <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-semibold text-[#3B9E3F] mb-8">
            Hadiah Tukar Poin
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start gap-6">
            <div className="text-[#3B9E3F]">
                <i className="bi bi-ticket-perforated text-6xl"></i>
            </div>

            <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">
                Voucher Potongan Harga Acara "Sejuta Pohon"
                </h2>
                <p className="text-lg font-semibold mb-4">Rp. 10.000</p>
            </div>

            <div>
                <span className="bg-[#3B9E3F] text-white px-6 py-2 rounded-md text-sm uppercase">
                Selesai
                </span>
            </div>
            </div>
        </div>

        <div className="bg-[#3B9E3F] rounded-lg p-6 mb-10">
            <div className="mb-4">
            <label className="block text-white mb-2">Nomor Handphone</label>
            <div className="bg-white rounded p-3 text-gray-700">
                +62 812-3456-7890
            </div>
            </div>

            <div>
            <label className="block text-white mb-2">Nomor Voucher</label>
            <div className="bg-white rounded p-3 text-gray-700">
                CYvpfOS1qy5B9vaeRh
            </div>
            </div>
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

export default PoinTukarDetail;