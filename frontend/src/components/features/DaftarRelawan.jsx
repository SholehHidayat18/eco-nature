import React, { useState } from 'react';
import RelawanService from "../../service/RelawanService";


const DaftarRelawan = () => {
    const [formData, setFormData] = useState({
        name: "",
        no_handphone: "",
        email: "",
        alamat: "",
    });
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [showStatusPopup, setShowStatusPopup] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowConfirmPopup(true);
    };

    const handleConfirmSubmit = async () => {
        setShowConfirmPopup(false);
        try {
            const newRelawan = await RelawanService.createRelawan(formData);

            if (newRelawan) {
                setIsSuccess(true);
                setFormData({ name: "", no_handphone: "", email: "", alamat: "" });
            } else {
                setIsSuccess(false);
            }
            setShowStatusPopup(true);
        } catch (error) {
            console.error("Error:", error);
            setIsSuccess(false);
            setShowStatusPopup(true);
        }
    };


    const handleClosePopup = () => {
        setShowConfirmPopup(false);
        setShowStatusPopup(false);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="relative h-96 overflow-hidden mb-16">
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
                            Beranda &raquo; Fitur &raquo; Daftar Relawan
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-2xl font-bold text-center mb-2 text-[#000000]">
                    Daftar Untuk Relawan
                </h2>
                <p className="text-center text-[#000000] mb-6">
                    Jadilah Relawan Dari EcoNature
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Masukkan nama lengkap"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="no_handphone" className="block mb-2 text-sm font-medium text-gray-600">
                                Nomor Handphone
                            </label>
                            <input
                                type="number"
                                id="no_handphone"
                                name="no_handphone"
                                placeholder="Masukkan nomor handphone"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
                                value={formData.no_handphone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                            Alamat Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Masukkan alamat email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-600">
                            Alamat
                        </label>
                        <textarea
                            id="alamat"
                            name="alamat"
                            placeholder="Masukkan alamat"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 focus:outline-none"
                            value={formData.alamat}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-6 mb-20 bg-[#3B9E3F] text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                    >
                        Daftar Sekarang
                    </button>
                </form>
            </div>

            {showConfirmPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">Daftar untuk Relawan</h2>
                            <p className="text-gray-600 mb-4">Jadilah Relawan EcoNature</p>
                            <h3 className="text-xl mb-8">Apakah anda yakin untuk Mendaftar?</h3>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={handleClosePopup}
                                    className="px-6 py-2 bg-[#BD081B] text-white rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    TIDAK
                                </button>
                                <button
                                    onClick={handleConfirmSubmit}
                                    className="px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    YA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showStatusPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl relative">
                        <div className="absolute inset-0 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></div>

                        <div className="relative text-center">
                            <h2 className="text-2xl font-bold mb-2">Daftar untuk Relawan</h2>
                            <p className="text-gray-600 mb-4">Jadilah Relawan EcoNature</p>

                            <div className="mb-4">
                                {isSuccess ? (
                                    <>
                                        <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                                            Pendaftaran Anda Telah Berhasil
                                            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            Terima kasih telah menjadi bagian dari kami
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                                            Pendaftaran Anda Gagal
                                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            Gagal mendaftarkan acara. Silakan hubungi Administrator
                                        </p>
                                    </>
                                )}
                            </div>

                            <button
                                onClick={handleClosePopup}
                                className={`px-6 py-2 text-white rounded-lg transition-colors ${isSuccess ? 'bg-green-500 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                                    }`}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default DaftarRelawan;