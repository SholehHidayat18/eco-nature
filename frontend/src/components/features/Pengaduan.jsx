import React, { useState } from 'react';
import KebijakanPrivasi from './KebijakanPrivasi';

const Pengaduan = () => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    phone: '',
    tanggal: '',
    foto: null,
    fotoPreview: '',
    jenisSampah: '',
    alamat: '',
    deskripsi: '',
    persetujuan: false
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        foto: file,
        fotoPreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append('namaLengkap', formData.namaLengkap);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('tanggal', formData.tanggal);
    submitData.append('foto', formData.foto);
    submitData.append('jenisSampah', formData.jenisSampah);
    submitData.append('alamat', formData.alamat);
    submitData.append('deskripsi', formData.deskripsi);
    submitData.append('persetujuan', formData.persetujuan);

    console.log('Form Data:', Object.fromEntries(submitData));
  };

  return (
    <div className="min-h-screen bg-white ">
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
                        Beranda &raquo; Fitur &raquo; Pengaduan
                    </nav>
                </div>
            </div>
        </div>

        <div className="max-w-6xl mx-auto p-6 mb-12">
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
                    onChange={(e) => setFormData({...formData, namaLengkap: e.target.value})}
                    value={formData.namaLengkap}
                />

                <input
                    type="email"
                    placeholder="Alamat Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    value={formData.email}
                />

                <input
                    type="tel"
                    placeholder="Nomor Handphone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    value={formData.phone}
                />

                <div className="relative">
                    <input
                        type="date"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
                        value={formData.tanggal}
                    />
                </div>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="relative">
                        <input
                        type="file"
                        accept="image/*"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        onChange={handleFileChange}
                        />
                        <i className="bi bi-camera absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>
                    
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
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
                            value={formData.jenisSampah}
                            onChange={(e) => setFormData({...formData, jenisSampah: e.target.value})}
                        >
                            <option value="" disabled>Jenis Sampah</option>
                            <option value="organik">Sampah Organik</option>
                            <option value="anorganik">Sampah Anorganik</option>
                            <option value="b3">Sampah B3</option>
                            <option value="b3">Sampah Campuran</option>
                        </select>
                        <i className="bi bi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>

                    <textarea
                        placeholder="Alamat Lengkap"
                        rows={4}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        onChange={(e) => setFormData({...formData, alamat: e.target.value})}
                        value={formData.alamat}
                    />
                    </div>
                </div>

                <textarea
                    placeholder="Deskripsi Singkat Masalah Sampah"
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={(e) => setFormData({...formData, deskripsi: e.target.value})}
                    value={formData.deskripsi}
                />

                <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="agreement"
                    className="rounded border-gray-300 text-green-500 focus:ring-green-500"
                    onChange={(e) => setFormData({...formData, persetujuan: e.target.checked})}
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
                    className="w-full py-3 bg-[#66BB6A] text-white rounded-md hover:bg-green-600 transition-colors font-medium"
                >
                    KIRIM LAPORAN
                </button>
                
                <button
                    type="button"
                    className="w-full py-3 bg-[#66BB6A] text-white rounded-md hover:bg-green-600 transition-colors font-medium"
                >
                    <a href="/DaftarPengaduan">
                    DAFTAR LAPORAN
                  </a>
                </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Pengaduan;