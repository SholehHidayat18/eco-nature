import React from 'react'

import { Routes, Route } from 'react-router-dom'
import TentangKami from '../components/TentangKami'
import Kontak from '../components/Kontak'
import { Berita, DaftarPengaduan, Donasi, Edukasi, KebijakanPrivasi, Pengaduan, Poin, Relawan } from '../components/features'
import Home from '../components/Home'
import Error from '../components/Error'
import PoinRiwayat from '../components/features/PoinRiwayat'
import PoinTukar from '../components/features/PoinTukar'
import PoinTukarDetail from '../components/features/PoinTukarDetail'
import PembayaranDonasi from '../components/features/PembayaranDonasi'
import Profile from '../components/Profile'
import ProfileEdit from '../components/ProfileEdit'
import DaftarRelawan from '../components/features/DaftarRelawan'
import DetailDonasi from '../components/features/DetailDonasi'
import DetailEdukasi from '../components/features/DetailEdukasi'
import DetailBerita from '../components/features/DetailBerita'
import DetailPengaduan from '../components/features/DetailPengaduan'
import KonfirmasiPembayaran from '../components/features/KonfirmasiPembayaran'



function Dashboard() {
    return (
        <>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/tentang-kami" element={<TentangKami />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile-edit" element={<ProfileEdit />} />
                <Route path="/kontak" element={<Kontak />} />
                <Route path="/error" element={<Error />} />
                <Route path="/Donasi" element={<Donasi />} />
                <Route path="/Donasi/:id" element={<DetailDonasi />} />
                <Route path="/KonfirmasiPembayaran" element={<KonfirmasiPembayaran />} />
                <Route path="/PembayaranDonasi/:id" element={<PembayaranDonasi />} />
                <Route path="/Edukasi" element={<Edukasi />} />
                <Route path="/Edukasi/:id" element={<DetailEdukasi />} />
                <Route path="/Relawan" element={<Relawan />} />
                <Route path="/Daftar-Relawan" element={<DaftarRelawan />} />
                <Route path="/Pengaduan" element={<Pengaduan />} />
                <Route path="/KebijakanPrivasi" element={<KebijakanPrivasi />} />
                <Route path="/DaftarPengaduan" element={<DaftarPengaduan />} />
                <Route path="/Pengaduan/:id" element={<DetailPengaduan />} />
                <Route path="/Poin" element={<Poin />} />
                <Route path="/PoinRiwayat" element={<PoinRiwayat />} />
                <Route path="/PoinTukar" element={<PoinTukar />} />
                <Route path="/poin-tukar-detail" element={<PoinTukarDetail />} />
                <Route path="/Berita" element={<Berita />} />
                <Route path="/Berita/:id" element={<DetailBerita />} />
            </Routes>
        </>
    )
}

export default Dashboard