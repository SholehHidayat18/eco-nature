import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import TentangKami from './components/TentangKami';
import Kontak from './components/Kontak';
import Error from './components/Error';

import {
  Donasi,
  Donasi1,
  Donasi2,
  Donasi3,
  Donasi4,
  Donasi5,
  Donasi6,
  Edukasi,
  Edukasi1,
  Edukasi2,
  Edukasi3,
  Edukasi4,
  Edukasi5,
  Edukasi6,
  Pengaduan,
  KebijakanPrivasi,
  DaftarPengaduan,
  LaporanPengguna1,
  LaporanPengguna2,
  LaporanPengguna3,
  LaporanPengguna4,
  LaporanPengguna5,
  LaporanPengguna6,
  Relawan,
  Poin,
  Berita,
  Berita1,
  Berita2,
  Berita3,
  Berita4,
  Berita5,
  Berita6,
  DonasiPage,
} from './components/features';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/masuk" element={<Login />} />
          <Route path="/daftar" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/error" element={<Error />} />
          
          <Route path="/Donasi" element={<Donasi />} />
          <Route path="/Donasi1" element={<Donasi1 />} />
          <Route path="/Donasi2" element={<Donasi2 />} />
          <Route path="/Donasi3" element={<Donasi3 />} />
          <Route path="/Donasi4" element={<Donasi4 />} />
          <Route path="/Donasi5" element={<Donasi5 />} />
          <Route path="/Donasi6" element={<Donasi6 />} />
          <Route path="/DonasiPage" element={<DonasiPage />} />
          <Route path="/Edukasi" element={<Edukasi />} />
          <Route path="/Edukasi1" element={<Edukasi1 />} />
          <Route path="/Edukasi2" element={<Edukasi2 />} />
          <Route path="/Edukasi3" element={<Edukasi3 />} />
          <Route path="/Edukasi4" element={<Edukasi4 />} />
          <Route path="/Edukasi5" element={<Edukasi5 />} />
          <Route path="/Edukasi6" element={<Edukasi6 />} />
          <Route path="/Relawan" element={<Relawan />} />
          <Route path="/Pengaduan" element={<Pengaduan />} />
          <Route path="/KebijakanPrivasi" element={<KebijakanPrivasi />} />
          <Route path="/DaftarPengaduan" element={<DaftarPengaduan />} />
          <Route path="/LaporanPengguna1" element={<LaporanPengguna1 />} />
          <Route path="/LaporanPengguna2" element={<LaporanPengguna2 />} />
          <Route path="/LaporanPengguna3" element={<LaporanPengguna3 />} />
          <Route path="/LaporanPengguna4" element={<LaporanPengguna4 />} />
          <Route path="/LaporanPengguna5" element={<LaporanPengguna5 />} />
          <Route path="/LaporanPengguna6" element={<LaporanPengguna6 />} />
          <Route path="/Poin" element={<Poin />} />
          <Route path="/Berita" element={<Berita />} />
          <Route path="/Berita1" element={<Berita1 />} />
          <Route path="/Berita2" element={<Berita2 />} />
          <Route path="/Berita3" element={<Berita3 />} />
          <Route path="/Berita4" element={<Berita4 />} />
          <Route path="/Berita5" element={<Berita5 />} />
          <Route path="/Berita6" element={<Berita6 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;