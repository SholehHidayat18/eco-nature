import { useEffect, useState } from "react";
import DonationService from "../../service/DonationService";
import RelawanService from "../../service/RelawanService";
import { Link } from "react-router-dom";

const AsideDonation = () => {
    const [donationData, setDonationData] = useState(null); // Menyimpan data donasi yang akan ditampilkan
    const [isLoading, setIsLoading] = useState(true);         // Untuk loading state
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        no_handphone: "",
        email: "",
        alamat: "",
    });
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [showStatusPopup, setShowStatusPopup] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                setIsLoading(true);
                const donations = await DonationService.getDonations(); // Panggil service API

                // Urutkan berdasarkan donationProgress terendah dan ambil 1 data pertama
                const sortedDonations = donations.sort((a, b) => a.donationProgress - b.donationProgress);
                setDonationData(sortedDonations[0]); // Menyimpan donasi dengan donationProgress terendah
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDonations();
    }, []);
    console.log(donationData)
    // Handling Loading dan Error
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    // Jika data donasi tidak ada
    if (!donationData) {
        return <p>No donation data available.</p>;
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowConfirmPopup(true);
    };
    const handleClosePopup = () => {
        setShowConfirmPopup(false);
        setShowStatusPopup(false);
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


    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold mb-2">EcoNature</h3>
                <p className="text-[#555555]">
                    Kami adalah EcoNature, komunitas peduli lingkungan. Dalam menghadapi Pemanasan Global, kami butuh dukungan Anda. Mari bersama-sama melindungi planet dan menciptakan masa depan yang berkelanjutan! Setiap tindakan kecil Anda bisa membawa perubahan besar bagi bumi kita.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-6">Ayo Mulai Berdonasi</h3>
                <div className="bg-white border rounded-lg overflow-hidden mb-6">
                    <img
                        src={`/images/${donationData.imagePath}` || "/images/d6.png"} // Menggunakan gambar dari API atau gambar default
                        alt="Donation"
                        className="w-full mb-4"
                    />
                    <h1 className="font-bold mb-4 text-xl ml-4">{donationData.title}</h1>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex -space-x-2 ml-4">
                            {donationData.payments?.slice(0, 3).map((user, idx) => (
                                <div
                                    key={idx}
                                    className="w-12 h-12 rounded-full overflow-hidden"
                                >
                                    <img
                                        src={user.from.image_path ? `/images/profile/${user.from.image_path}` : "/default_profile.jpg"}
                                        alt="user"
                                        className="w-full h-full"
                                    />
                                </div>
                            ))}
                            <div className="w-12 h-12 bg-[#3B9E3F] rounded-full flex items-center justify-center text-white text-sm">
                                +{donationData.donationCount - 3}
                            </div>
                        </div>
                        <span className="text-sm text-gray-600">{donationData.donationCount} Pendukung</span>
                    </div>
                    <div className="w-[363px] bg-gray-200 rounded-full h-2 mb-4 ml-4">
                        <div
                            className="bg-[#3B9E3F] h-2 rounded-full"
                            style={{ width: `${donationData.donationProgress}%` }}
                        ></div>
                    </div>
                    <div className="justify-between text-center text-sm text-gray-600 grid md:grid-cols-3 font-bold mb-4">
                        <div className="w-full items-center justify-center text-center">
                            {donationData.donationProgress}% <br /> Didanai
                        </div>
                        <div className='mr-4'>Rp {donationData.totalDonations.toLocaleString()} <br /> Terkumpul</div>
                        <div className='ml-2'>Rp {donationData.target.toLocaleString()} <br /> Diperlukan</div>
                    </div>
                    <button className="w-full bg-[#3B9E3F] text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                        <Link
                            to={`/Donasi/${donationData.id}`}
                        >
                            DONASI SEKARANG
                        </Link>
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Berita Terbaru</h2>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                        src="/images/b4.png"
                        alt="Plant growing"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-xl mb-2">
                            Pemulihan Terumbu Karang di Indonesia
                        </h3>
                        <a href="/Berita" className="text-[#3B9E3F] hover:underline font-bold">BACA SELENGKAPNYA</a>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2 mt-2">
                            <div className="flex items-center gap-1">
                                <i className="bi bi-calendar text-[#689F38]"></i>
                                <span> 29 Juli, 2024</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <i className="bi bi-chat-dots text-[#689F38]"></i>
                                <span>134 Komentar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4 mt-6">Menjadi Relawan</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Lengkap"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Alamat Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="number"
                        id="no_handphone"
                        name="no_handphone"
                        value={formData.no_handphone}
                        onChange={handleChange}
                        placeholder="Nomor Handphone"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <textarea
                        id="alamat"
                        name="alamat"
                        placeholder="Masukkan alamat"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={formData.alamat}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[#3B9E3F] text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                        BERGABUNG SEKARANG
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
                                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    TIDAK
                                </button>
                                <button
                                    onClick={handleConfirmSubmit}
                                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors"
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

export default AsideDonation;
