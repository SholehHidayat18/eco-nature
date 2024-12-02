import React, { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';



const Profile = () => {
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [user, setUser] = useState(null);
    
    const { isAuth, userId ,userName, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setUser(null);
        
    };

const handleNavigateToProfile = () => {
    navigate('/Profile');
}

    const handleClosePopup = () => setShowExitPopup(false);
    const handleShowPopup = () => setShowExitPopup(true);

    return (
        <div className="min-h-screen bg-white">
            {/* Bagian Header */}
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
                            Beranda &raquo; Profil
                        </nav>
                    </div>
                </div>
            </div>

            {/* Bagian Profil */}
            <div className="max-w-6xl mx-auto p-6 mb-10">
                <h1 className="text-3xl font-bold mb-4 text-center">Profil</h1>
                <div className="bg-white rounded-lg shadow-md max-w-6xl mx-auto p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                                <img src="/images/us.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                { isAuth || user ? (
                                    <>
                                    <p className="flex item-center text-2xl font-bold text-[#3B9E3F]"
                                    onClick={handleNavigateToProfile}>
                                        {userName}
                                    </p>
                                    </>
                                ) : (
                                    <>
                                    <p className="text-center">silahkan login</p>
                                    </>
                                )

                                }
                                    <p className="text-gray-500">1</p>
                                   
                                
                            </div>
                        </div>
                        <button className="bg-[#3B9E3F] w-[300px] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                            <Link to="/profile-edit">EDIT PROFIL</Link>
                        </button>
                    </div>
                </div>

                {/* Form Input */}
                <div className="max-w-6xl mx-auto p-6">
                <div className="flex items-center mb-4">
                <i className="bi bi-person-fill text-gray-500 mr-2"></i>
                <span className="text-gray-700">Nama Lengkap</span>
                </div>
                <input type="text" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <div className="flex items-center mb-4 mt-4">
                <i className="bi bi-gender-ambiguous text-gray-500 mr-2"></i>
                <span className="text-gray-700">Jenis Kelamin</span>
                </div>
                <input type="text" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <div className="flex items-center mb-4 mt-4">
                <i className="bi bi-calendar-date text-gray-500 mr-2"></i>
                <span className="text-gray-700">Tanggal Lahir</span>
                </div>
                <input type="text" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <div className="flex items-center mb-4 mt-4">
                <i className="bi bi-briefcase text-gray-500 mr-2"></i>
                <span className="text-gray-700">Pekerjaan</span>
                </div>
                <input type="text" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <div className="flex items-center mb-4 mt-4">
                <i className="bi bi-envelope text-gray-500 mr-2"></i>
                <span className="text-gray-700">Email</span>
                </div>
                <input type="email" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <div className="flex items-center mb-4 mt-4">
                <i className="bi bi-phone text-gray-500 mr-2"></i>
                <span className="text-gray-700">Nomor Handphone</span>
                </div>
                <input type="tel" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <div className="flex items-center mb-4 mt-4">
                <i className="bi bi-map text-gray-500 mr-2"></i>
                <span className="text-gray-700">Alamat</span>
                </div>
                    <textarea
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-24"
                    rows={4}
                    ></textarea>
            </div>

                {/* Tombol Navigasi */}
                <div className="max-w-4xl mx-auto p-6 flex justify-between">
                    <button className="bg-[#3B9E3F] w-[300px] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                        KEMBALI KEBERANDA
                    </button>
                    <button
                        className="bg-[#BD081B] w-[300px] text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                        onClick={handleShowPopup}
                    >
                        KELUAR
                    </button>
                </div>

                {/* Popup Keluar */}
                {showExitPopup && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-md">
                            <div className="text-center">
                                <BiCheckCircle className="text-[#3B9E3F] text-6xl mb-4" />
                                <h2 className="text-2xl font-bold mb-2">Apakah anda yakin untuk Keluar?</h2>
                                <div className="flex justify-center mt-6">
                                    <button
                                        className="bg-[#BD081B] text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors mr-4"
                                        onClick={handleClosePopup}
                                    >
                                        TIDAK
                                    </button>
                                    <button
                                        className="bg-[#3B9E3F] text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                                        onClick={handleLogout}
                                    >
                                        IYA
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
