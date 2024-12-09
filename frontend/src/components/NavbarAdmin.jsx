import React from 'react'
import { FaBookOpen, FaExclamationCircle, FaHandHoldingHeart, FaNewspaper, FaSignOutAlt, FaTachometerAlt, FaUsers } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext';


function NavbarAdmin() {
    const { logout } = useAuth();
    return (
        <nav>
            <a
                href="/admin/dashboard-admin"
                className="flex items-center gap-4 px-4 py-3 hover:bg-green-700 rounded-md"
            >
                <FaTachometerAlt className="mr-3" /> Beranda
            </a>
            <a
                href="/admin/donasi-admin"
                className="flex items-center gap-4 px-4 py-3 hover:bg-green-700 rounded-md"
            >
                <FaHandHoldingHeart className="mr-3" /> Donasi
            </a>
            <a
                href="/admin/edukasi-admin"
                className="flex items-center gap-4 px-4 py-3 hover:bg-green-700 rounded-md"
            >
                <FaBookOpen className="mr-3" /> Edukasi
            </a>
            <a
                href="/admin/relawan-admin"
                className="flex items-center gap-4 px-4 py-3 hover:bg-green-700 rounded-md"
            >
                <FaUsers className="mr-3" /> Relawan
            </a>
            <a
                href="/admin/pengaduan-admin"
                className="flex items-center gap-4 px-4 py-3 hover:bg-green-700 rounded-md"
            >
                <FaExclamationCircle className="mr-3" /> Pengaduan
            </a>
            <a
                href="/admin/berita-admin"
                className="flex items-center gap-4 px-4 py-3 hover:bg-green-700 rounded-md"
            >
                <FaNewspaper className="mr-3" /> Berita
            </a>
            <button
                onClick={logout}
                className="flex items-center w-full gap-4 px-4 py-3 hover:bg-green-700 rounded-md"
            >
                <FaSignOutAlt className="mr-3" /> Logout
            </button>
        </nav>
    )
}

export default NavbarAdmin