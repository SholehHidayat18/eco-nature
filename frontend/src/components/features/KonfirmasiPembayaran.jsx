import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentService from '../../service/PaymentService';
import BankService from '../../service/BankService';
import Swal from 'sweetalert2';

const KonfirmasiPembayaran = () => {
    const location = useLocation();
    const [bankData, setBankData] = useState(null);
    const formData = location.state;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imagePath, setImagePath] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePath(URL.createObjectURL(file)); // Preview uploaded image
        }
    };

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                setIsLoading(true);
                const bank = await BankService.getBankById(formData.bank_id);
                setBankData(bank);
            } catch (err) {
                setError(err.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal memuat data bank',
                    text: 'Terjadi kesalahan saat memuat data bank. Silakan coba lagi.',
                });
            } finally {
                setIsLoading(false);
            }
        };

        if (formData?.bank_id) {
            fetchBanks();
        }
    }, [formData]);

    const handleConfirm = async () => {
        const submitData = new FormData();
        submitData.append('total', formData.total);
        submitData.append('bank_id', formData.bank_id);
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('no_handphone', formData.no_handphone);
        submitData.append('message', formData.message);
        submitData.append('donation_id', formData.donation_id);

        // Append the image file if imagePath is set
        if (imagePath) {
            const file = document.querySelector('input[type="file"]').files[0];  // Get the file object directly from the input
            if (file) {
                submitData.append('image_path', file); // Append the file to FormData
            }
        }

        try {
            const response = await PaymentService.createPayment(submitData);
            console.log("Response Data:", response);

            if (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Pembayaran Berhasil',
                    text: 'Terima kasih telah memberikan donasi.',
                    confirmButtonText: 'Konfirmasi',
                    confirmButtonColor: '#3B9E3F',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Navigasi ke halaman Donasi
                        window.location.href = '/Donasi';
                    }
                });
                window.location.href = '/Donasi' // Tampilkan pop-up jika berhasil
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mengirim Pembayaran',
                text: error.message || 'Terjadi kesalahan. Silakan coba lagi.',
            });
            console.error(error);
        }

    };



    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!bankData) {
        return <div>Bank data not available</div>;
    }

    const { brand, no_rek, image_path, an } = bankData;

    return (
        <div className="min-h-screen bg-white">
            <div className="relative h-96 overflow-hidden mb-10">
                <img src="/images/header.jpg" alt="Waterfall" className="w-full h-full object-cover" />
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
                <div className="flex justify-between items-center px-6 w-full min-h-[116px] mt-4 bg-white shadow-xl">
                    <span className="font-semibold text-[28px]"> Total Pembayaran</span>
                    <span className="font-semibold text-[28px] text-[#3B9E3F]"> {formData.total}</span>
                </div>

                <div className="flex justify-between items-center px-6 w-full rounded-lg min-h-[116px] mt-4 bg-white shadow-xl">
                    <div className="flex items-center space-x-4">
                        <img src={image_path ? `/images/bank/${image_path}` : `/images/bank/bca.png`} alt="logo bank" className="w-20" />
                        <span className="font-semibold text-[28px]">Bank {brand}</span>
                    </div>
                    <div className='flex space-x-8 justify-center items-center'>
                        <div className="flex flex-col border p-2 rounded-lg">
                            <span className="font-normal text-[20px]">No. Rekening</span>
                            <span className="font-semibold text-[28px] text-[#3B9E3F]">{no_rek}</span>
                        </div>
                        <div className="flex flex-col border p-2 rounded-lg">
                            <span className="font-normal text-[20px]">Atas Nama</span>
                            <span className="font-semibold text-[28px] text-[#3B9E3F]">{an}</span>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col p-6 w-full rounded-lg min-h-[116px] mt-4 bg-white shadow-xl">
                    <span className="font-semibold text-[26px]">Petunjuk Transfer mBanking</span>
                    <ul className="space-y-2 mt-2">
                        <li>
                            <span className="inline-flex text-center items-center justify-center w-6 h-6 bg-gray-300 text-white rounded-full">
                                1
                            </span>{" "}
                            Pilih <strong>m-Transfer &gt; BCA Virtual Account</strong>
                        </li>
                        <li>
                            <span className="inline-flex text-center items-center justify-center w-6 h-6 bg-gray-300 text-white rounded-full">
                                2
                            </span>{" "}
                            Masukkan nomor Virtual Account <strong>{no_rek}</strong>
                        </li>
                        <li>
                            <span className="inline-flex text-center items-center justify-center w-6 h-6 bg-gray-300 text-white rounded-full">
                                3
                            </span>{" "}
                            Periksa informasi yang tertera di layar. Pastikan <strong>total tagihan</strong> sudah benar. Jika benar, pilih <strong>Ya</strong>
                        </li>
                        <li>
                            <span className="inline-flex text-center items-center justify-center w-6 h-6 bg-gray-300 text-white rounded-full">
                                4
                            </span>{" "}
                            Masukkan PIN m-BCA Anda dan pilih <strong>OK</strong>
                        </li>
                        <li>
                            <span className="inline-flex text-center items-center justify-center w-6 h-6 bg-gray-300 text-white rounded-full">
                                5
                            </span>{" "}
                            Jika muncul notifikasi “Transaksi Gagal. Nominal melebihi limit harian”, mohon ulangi transaksi menggunakan KlikBCA (iBanking) atau ATM.
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-start p-6 w-full rounded-lg min-h-[116px] mt-4 bg-white shadow-xl">
                    <label className="font-semibold text-[20px]">Upload Bukti Pembayaran</label>
                    <input
                        type="file"
                        className="mt-2"
                        onChange={handleImageUpload}
                    />
                    {imagePath && (
                        <img src={imagePath} alt="Uploaded" className="mt-4 w-32 h-32 object-cover rounded-lg" />
                    )}
                </div>

                <div className="flex justify-center items-center mt-6">
                    <button
                        onClick={handleConfirm}
                        className="w-1/2 h-[53px] bg-[#3B9E3F] text-white font-bold rounded-lg"
                    >
                        OK
                    </button>
                </div>

            </div>
        </div>
    );
};

export default KonfirmasiPembayaran;
