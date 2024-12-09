import React, { useEffect, useState } from 'react';
import PengaduanCard from '../Pengaduan/PengaduanCard';
import PengaduanService from '../../service/PengaduanService';

const DaftarPengaduan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [pengaduans, setPengaduans] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State for loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPengaduans = async () => {
      try {
        const data = await PengaduanService.getPengaduan();
        setPengaduans(data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch pengaduans');
        setLoading(false);
      }
    };

    fetchPengaduans();
  }, []);

  // Filter the pengaduans based on search term, location, and status
  const filteredPengaduan = pengaduans.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.alamat.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      locationFilter === '' ||
      item.provinsi.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesStatus =
      statusFilter === '' || item.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesLocation && matchesStatus;
  });

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
              Beranda &raquo; Fitur &raquo; Daftar Laporan Pengaduan
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-6">Daftar Laporan Pengaduan</h2>
        <div className="flex justify-between mb-2">
          <select
            className="p-2 border rounded w-[194px] h-[51px]"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="" >Pilih Domisili</option>
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

          <select
            className="p-2 border rounded w-[265px] h-[51px]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Filter Status Pelaporan</option>
            <option value="diproses">Diproses</option>
            <option value="selesai">Selesai</option>
            <option value="ditolak">Ditolak</option>
          </select>

          <div className="flex items-center border rounded p-2 w-[503px] h-[51px]">
            <input
              type="text"
              placeholder="Pencarian"
              className="outline-none px-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="bi bi-search absolute right-56"></i>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl mb-8">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader" />
            <p className="text-gray-600 ml-4">Memuat data...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : filteredPengaduan.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            Tidak ada laporan pengaduan yang sesuai.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPengaduan.map((pengaduan, index) => (
              <PengaduanCard key={index} {...pengaduan} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DaftarPengaduan;
