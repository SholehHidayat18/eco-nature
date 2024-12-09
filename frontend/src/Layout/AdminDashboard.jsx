import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardAdmin from '../components/Admin/DashboardAdmin';
import BeritaAdmin from '../components/Admin/BeritaAdmin';
import DonasiAdmin from '../components/Admin/DonasiAdmin';
import EditPengaduanAdmin from '../components/Admin/EditPengaduanAdmin';
import EdukasiAdmin from '../components/Admin/EdukasiAdmin';
import PengaduanAdmin from '../components/Admin/PengaduanAdmin';
import ProfileAdmin from '../components/Admin/ProfileAdmin';
import TambahBeritaAdmin from '../components/Admin/TambahBeritaAdmin';
import TambahMateriAdmin from '../components/Admin/TambahMateriAdmin';
import RelawanAdmin from '../components/Admin/RelawanAdmin';




function AdminDashboard() {
    return (
        <>

            <Routes>
                <Route path="/dashboard-admin" element={<DashboardAdmin />} />
                <Route path="/berita-admin" element={<BeritaAdmin />} />
                <Route path="/donasi-admin" element={<DonasiAdmin />} />
                <Route path="/edit-pengaduan" element={<EditPengaduanAdmin />} />
                <Route path="/edit-relawan" element={<EditPengaduanAdmin />} />
                <Route path="/edukasi-admin" element={<EdukasiAdmin />} />

                <Route path="/pengaduan-admin" element={<PengaduanAdmin />} />

                <Route path="/relawan-admin" element={<RelawanAdmin />} />
                <Route path="/profile-admin" element={<ProfileAdmin />} />
                <Route path="tambah-berita-admin" element={<TambahBeritaAdmin />} />
                <Route path="tambah-materi-admin" element={<TambahMateriAdmin />} />

            </Routes>
        </>
    )
}

export default AdminDashboard