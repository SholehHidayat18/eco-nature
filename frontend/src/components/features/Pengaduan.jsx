import React, { useState } from 'react';
import KebijakanPrivasi from './KebijakanPrivasi';  // This will render your privacy policy link or modal
import PengaduanService from '../../service/PengaduanService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Pengaduan = () => {
    const [formData, setFormData] = useState({
        namaLengkap: '',
        email: '',
        title: '',
        phone: '',
        foto: null,
        fotoPreview: '',
        jenisSampah: '',
        alamat: '',
        deskripsi: '',
        persetujuan: false,
        provinsi: '',
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                foto: file,
                fotoPreview: URL.createObjectURL(file),
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if a photo is selected and validate it
        if (!formData.foto) {
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'Anda harus mengunggah foto untuk melaporkan masalah.',
            });
            return;
        }

        // Check if the file is an image (you can adjust the types according to your needs)
        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
        if (!allowedFileTypes.includes(formData.foto.type)) {
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'Format file tidak didukung. Harap unggah file gambar (JPG, PNG, atau GIF).',
            });
            return;
        }

        // Check if the file size is within the allowed limit (e.g., 5MB)
        const maxFileSize = 5 * 1024 * 1024; // 5MB
        if (formData.foto.size > maxFileSize) {
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'Ukuran file terlalu besar. Harap unggah gambar dengan ukuran maksimal 5MB.',
            });
            return;
        }

        // Creating FormData for file upload
        const submitData = new FormData();
        submitData.append('name', formData.namaLengkap);
        submitData.append('title', formData.title);
        submitData.append('email', formData.email);
        submitData.append('no_handphone', formData.phone);
        submitData.append('image_path', formData.foto);
        submitData.append('jenis_sampah', formData.jenisSampah);
        submitData.append('alamat', formData.alamat);
        submitData.append('provinsi', formData.provinsi);
        submitData.append('description', formData.deskripsi);

        // Validate that the user has agreed to the privacy policy
        if (!formData.persetujuan) {
            Swal.fire({
                icon: 'warning',
                title: 'Peringatan',
                text: 'Anda harus menyetujui kebijakan privasi untuk mengirimkan laporan.',
            });
            return;
        }

        try {
            const response = await PengaduanService.createPengaduan(submitData);
            if (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Pengaduan Berhasil Dikirim!',
                    text: 'Terima kasih telah melaporkan masalah sampah.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mengirim Pengaduan',
                text: 'Terjadi kesalahan. Silakan coba lagi.',
            });
            console.error(error);
        }
    };

    const handleToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <div className="min-h-screen bg-white ">
            <div className="relative h-96 overflow-hidden mb-10">
                <img
                    src="/images/header.jpg"
                    alt="Header"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0">
                    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
                        <h1 className="text-6xl md:text-5xl text-white font-bold mb-4 ml-16">
                            Econature: Bersama untuk Bumi yang <br /> Lebih Lestari
                        </h1>
                        <nav className="text-white/90 text-2xl ml-16">
                            Beranda &raquo; Fitur &raquo; Pengaduan
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-6 mb-14">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    Laporkan Sampah Menumpuk Dilingkungan Anda
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
                                value={formData.namaLengkap}
                            />
                            <input
                                type="text"
                                placeholder="Judul Laporan"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                value={formData.title}
                            />
                            <input
                                type="email"
                                placeholder="Alamat Email"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                value={formData.email}
                            />
                            <input
                                type="tel"
                                placeholder="Nomor Handphone"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                value={formData.phone}
                            />
                            <div className="relative">
                                <select
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={formData.provinsi}
                                    onChange={(e) => setFormData({ ...formData, provinsi: e.target.value })}
                                >
                                    <option value="" disabled>Pilih Domisili</option>
                                    <option value="Nanggroe Aceh Darussalam">Nanggroe Aceh Darussalam</option>
                                    <option value="Sumatera Utara">Sumatera Utara</option>
                                    <option value="Sumatera Selatan">Sumatera Selatan</option>
                                    <option value="Sumatera Barat">Sumatera Barat</option>
                                    <option value="Bengkulu">Bengkulu</option>
                                    <option value="Riau">Riau</option>
                                    <option value="Kepulauan Riau">Kepulauan Riau</option>
                                    <option value="Jambi">Jambi</option>
                                    <option value="Lampung">Lampung</option>
                                    <option value="Bangka Belitung">Bangka Belitung</option>
                                    <option value="Kalimantan Barat">Kalimantan Barat</option>
                                    <option value="Kalimantan Timur">Kalimantan Timur</option>
                                    <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                                    <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                                    <option value="Kalimantan Utara">Kalimantan Utara</option>
                                    <option value="Banten">Banten</option>
                                    <option value="Daerah Khusus Jakarta">Daerah Khusus Jakarta</option>
                                    <option value="Jawa Barat">Jawa Barat</option>
                                    <option value="Jawa Tengah">Jawa Tengah</option>
                                    <option value="Daerah Istimewa Yogyakarta">Daerah Istimewa Yogyakarta</option>
                                    <option value="Jawa Timur">Jawa Timur</option>
                                    <option value="Bali">Bali</option>
                                    <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                                    <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                                    <option value="Gorontalo">Gorontalo</option>
                                    <option value="Sulawesi Barat">Sulawesi Barat</option>
                                    <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                                    <option value="Sulawesi Utara">Sulawesi Utara</option>
                                    <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                                    <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                                    <option value="Maluku Utara">Maluku Utara</option>
                                    <option value="Maluku">Maluku</option>
                                    <option value="Papua Barat">Papua Barat</option>
                                    <option value="Papua">Papua</option>
                                    <option value="Papua Tengah">Papua Tengah</option>
                                    <option value="Papua Pegunungan">Papua Pegunungan</option>
                                    <option value="Papua Selatan">Papua Selatan</option>
                                    <option value="Papua Barat Daya">Papua Barat Daya</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    onChange={handleFileChange}
                                />
                                {formData.fotoPreview && (
                                    <div className="mt-2">
                                        <img
                                            src={formData.fotoPreview}
                                            alt="Preview"
                                            className="max-w-full h-40 object-cover rounded-md"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <select
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={formData.jenisSampah}
                                    onChange={(e) => setFormData({ ...formData, jenisSampah: e.target.value })}
                                >
                                    <option value="" disabled>Jenis Sampah</option>
                                    <option value="Sampah Organik">Sampah Organik</option>
                                    <option value="Sampah Anorganik">Sampah Anorganik</option>
                                    <option value="Sampah B3">Sampah B3</option>
                                    <option value="Sampah Campuran">Sampah Campuran</option>
                                </select>
                            </div>

                            <textarea
                                placeholder="Alamat Lengkap"
                                rows={4}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                                value={formData.alamat}
                            />
                        </div>
                    </div>


                    <textarea
                        placeholder="Deskripsi Singkat Masalah Sampah"
                        rows={6}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                        value={formData.deskripsi}
                    />

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="agreement"
                            className="rounded border-gray-300 text-green-500 focus:ring-green-500"
                            onChange={(e) => setFormData({ ...formData, persetujuan: e.target.checked })}
                            checked={formData.persetujuan}
                        />
                        <label htmlFor="agreement" className="text-gray-600">
                            Saya setuju dengan
                        </label>
                        <KebijakanPrivasi />
                    </div>

                    <div className="space-y-4">
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#3B9E3F] text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                        >
                            KIRIM LAPORAN
                        </button>

                    </div>
                </form>
                <div className="mt-4 w-full flex items-center justify-center">
                    <Link
                        onClick={handleToTop}
                        to="/DaftarPengaduan"
                        className="w-full uppercase text-center py-3 bg-[#3B9E3F] text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                    >
                        DAFTAR LAPORAN
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pengaduan;
