import React, { useEffect, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ProfileService from "../service/profileService";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [showExitPopup, setShowExitPopup] = useState(false);

    const { logout } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); // Untuk loading state
    const [error, setError] = useState(null); // Untuk menangani error

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setIsLoading(true);
                const user = await ProfileService.getProfile(); // Panggil service API
                setUserData(user);
                console.log(user);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const handleClosePopup = () => setShowExitPopup(false);
    const handleShowPopup = () => setShowExitPopup(true);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>Data pengguna tidak ditemukan.</div>;
    }

    const {
        name,
        jenis_kelamin,
        tanggal_lahir,
        pekerjaan,
        no_handphone,
        email,
        alamat,
        image_path,
    } = userData;

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
                                <img
                                    src={image_path ? `/images/profile/${image_path}` : `/default_profile.jpg`}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#3B9E3F]">
                                    {name || "Nama tidak tersedia"}
                                </p>
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
                        <span className="text-gray-700">Nama Lengkap</span>
                    </div>
                    <input
                        type="text"
                        value={name || ""}
                        readOnly
                        className="w-full bg-gray-100 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <div className="flex items-center mb-4 mt-4">
                        <span className="text-gray-700">Jenis Kelamin</span>
                    </div>
                    <input
                        type="text"
                        value={jenis_kelamin || "Belum diisi"}
                        readOnly
                        className="w-full bg-gray-100 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <div className="flex items-center mb-4 mt-4">
                        <span className="text-gray-700">Tanggal Lahir</span>
                    </div>
                    <input
                        type="text"
                        value={
                            tanggal_lahir
                                ? new Date(tanggal_lahir).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                })
                                : "Belum diisi"
                        }
                        readOnly
                        className="w-full px-3 bg-gray-100 py-2 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <div className="flex items-center mb-4 mt-4">
                        <span className="text-gray-700">Pekerjaan</span>
                    </div>
                    <input
                        type="text"
                        value={pekerjaan || "Belum diisi"}
                        readOnly
                        className="w-full px-3 bg-gray-100 py-2 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <div className="flex items-center mb-4 mt-4">
                        <span className="text-gray-700">Email</span>
                    </div>
                    <input
                        type="email"
                        value={email || ""}
                        readOnly
                        className="w-full px-3 bg-gray-100 py-2 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <div className="flex items-center mb-4 mt-4">
                        <span className="text-gray-700">Nomor Handphone</span>
                    </div>
                    <input
                        type="tel"
                        value={no_handphone || "Belum diisi"}
                        readOnly
                        className="w-full bg-gray-100 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                    />
                    <div className="flex items-center mb-4 mt-4">
                        <span className="text-gray-700">Alamat</span>
                    </div>
                    <textarea
                        value={alamat || "Belum diisi"}
                        readOnly
                        className="w-full bg-gray-100 px-3 py-2 rounded-md border border-gray-300 focus:outline-none resize-none h-24"
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
                                <BiCheckCircle className="text-[#3B9E3F] text-6xl mb-4 items-center justify-center" />
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
