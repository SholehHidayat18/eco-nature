import React, { useState } from 'react';

const PengaduanCard = ({ date, title, location, imageUrl, pengaduanLink, status, statusColor }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
    <div className="relative h-48">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <div className="flex items-center space-x-2">
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="flex items-start space-x-2">
        <i class="bi bi-geo-alt-fill text-[#689F38]"></i>
        <span className="text-gray-600">{location}</span>
      </div>
      <div className={`block w-full text-white font-semibold px-4 pb-4 py-2 rounded text-center ${statusColor} mt-3`}>
        {status}
      </div>
    </div>
    <div className="px-4 pb-4 ml-16 mr-16">
      <a 
        href={pengaduanLink}
        className="block w-56 bg-[#3B9E3F] text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors text-center no-underline font-semibold justify-center items-center"
      >
        LIHAT ACARA
      </a>
    </div>
  </div>
);

const DaftarPengaduan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const pengaduan = [
    {
      date: '21 Mei, 2024',
      title: 'Sampah yang Menumpuk di Tepi Jalan',
      location: ' Pekanbaru, Riau, Indonesia',
      imageUrl: '/images/q1.png',
      pengaduanLink: '/LaporanPengguna1',
      status: 'DITERIMA',
      statusColor: 'bg-[#4285F4]',
    },
    {
      date: '30 Oktober, 2024',
      title: 'Sampah yang Menumpuk di Sekitar Jembatan',
      location: ' Bengkulu, Bengkulu, Indonesia',
      imageUrl: '/images/q2.png',
      pengaduanLink: '/LaporanPengguna2',
      status: 'SEDANG DIPROSES',
      statusColor: 'bg-[#FABB05]',
    },
    {
      date: '20 Maret, 2024',
      title: 'Sampah yang Menumpuk di Pembuangan Sampah',
      location: ' Tegal, Jawa Tengah, Indonesia',
      imageUrl: '/images/q3.png',
      pengaduanLink: '/LaporanPengguna3',
      status: 'SELESAI',
      statusColor: 'bg-[#1B5E20]',
    },
    {
      date: '21 Juli, 2024',
      title: 'Sampah yang Menumpuk di Sekitar Pasar',
      location: ' Pariaman, Sumatera Barat, Indonesia',
      imageUrl: '/images/q4.png',
      pengaduanLink: '/LaporanPengguna4',
      status: 'SEDANG DIPROSES',
      statusColor: 'bg-[#FABB05]',
    },
    {
      date: '21 Oktober, 2024',
      title: 'Sampah yang Menumpuk di Tepi Jalan',
      location: ' Kota Malang, Jawa Timur, Indonesia',
      imageUrl: '/images/q5.png',
      pengaduanLink: '/LaporanPengguna5',
      status: 'DITERIMA',
      statusColor: 'bg-[#4285F4]',
    },
    {
      date: '21 Januari, 2024',
      title: 'Sampah yang Menumpuk di Tepi Sungai ',
      location: ' Kota Jambi, Jambi, Indonesia',
      imageUrl: '/images/q6.png',
      pengaduanLink: '/LaporanPengguna6',
      status: 'SELESAI',
      statusColor: 'bg-[#1B5E20]',
    }
  ];

  const filteredPengaduan = pengaduan.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = 
      locationFilter === '' || 
      item.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesStatus = 
      statusFilter === '' || 
      item.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesLocation && matchesStatus;
  });


  return (
    <div className="min-h-screen bg-white ">
        <div className="relative h-96 overflow-hidden">
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

        <div className="container mx-auto px-4 mt-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Daftar Laporan Pengaduan</h2>
          <div className="flex justify-between mb-4">
            <select className="p-2 border rounded w-[194px] h-[51px]"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}>
              <option value="" >Filter Lokasi</option>
              <option value="penanganan">Nanggroe Aceh Darussalam</option>
              <option value="diproses">Sumatera Utara</option>
              <option value="selesai">Sumatera Selatan</option>
              <option value="ditolak">Sumatera Barat</option>
              <option value="ditolak">Bengkulu</option>
              <option value="ditolak">Riau</option>
              <option value="ditolak">Kepulauan Riau</option>
              <option value="ditolak">Jambi</option>
              <option value="ditolak">Lampung</option>
              <option value="ditolak">Bangka Belitung</option>
              <option value="ditolak">Kalimantan Barat</option>
              <option value="ditolak">Kalimantan Timur</option>
              <option value="ditolak">Kalimantan Selatan</option>
              <option value="ditolak">Kalimantan Tengah</option>
              <option value="ditolak">Kalimantan Utara</option>
              <option value="ditolak">Banten</option>
              <option value="ditolak">Daerah Khusus Jakarta</option>
              <option value="ditolak">Jawa Barat</option>
              <option value="ditolak">Jawa Tengah</option>
              <option value="ditolak">Daerah Istimewa Yogyakarta</option>
              <option value="ditolak">Jawa Timur</option>
              <option value="ditolak">Bali</option>
              <option value="ditolak">Nusa Tenggara Timur</option>
              <option value="ditolak">Nusa Tenggara Barat</option>
              <option value="ditolak">Gorontalo</option>
              <option value="ditolak">Sulawesi Barat</option>
              <option value="ditolak">Sulawesi Tengah</option>
              <option value="ditolak">Sulawesi Utara</option>
              <option value="ditolak">Sulawesi Tenggara</option>
              <option value="ditolak">Sulawesi Selatan</option>
              <option value="ditolak">Maluku Utara</option>
              <option value="ditolak">Maluku</option>
              <option value="ditolak">Papua Barat</option>
              <option value="ditolak">Papua</option>
              <option value="ditolak">Papua Tengah</option>
              <option value="ditolak">Papua Pegunungan</option>
              <option value="ditolak">Papua Selatan</option>
              <option value="ditolak">Papua Barat Daya</option>
            </select>
            <i className="bi bi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <select className="p-2 border rounded w-[265px] h-[51px]"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="" >Filter Status Pelaporan</option>
              <option value="diproses">Sedang Diproses</option>
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

        <div className="container mx-auto px-4 py-8 mt-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPengaduan.map((pengaduan, index) => (
            <PengaduanCard key={index} {...pengaduan} />
            ))}
        </div>

        {filteredPengaduan.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            Tidak ada laporan pengaduan yang sesuai
          </div>
        )}
        
        <div className="flex justify-center items-center space-x-2 mt-8">
            <button className="p-2 rounded-md border hover:bg-gray-100">
            <i className="bi bi-chevron-left"></i>
            </button>
            <button className="p-2 rounded-md bg-green-500 text-white">1</button>
            <button className="p-2 rounded-md border hover:bg-gray-100">2</button>
            <button className="p-2 rounded-md border hover:bg-gray-100">3</button>
            <button className="p-2 rounded-md border hover:bg-gray-100">
            <i className="bi bi-chevron-right"></i>
            </button>
        </div>
        </div>
    </div>
  );
};

export default DaftarPengaduan;