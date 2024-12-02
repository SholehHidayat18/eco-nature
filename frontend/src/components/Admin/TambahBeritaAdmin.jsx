import React, { useState } from "react";
import { FaBell, FaUser, FaTachometerAlt, FaHandHoldingHeart, FaBookOpen, FaUsers, FaExclamationCircle, FaGift, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';
import NavbarAdmin from "../NavbarAdmin";

const TambahBeritaAdmin = () => {
  const [formData, setFormData] = useState({
    judul: "",
    tanggal: "",
    isi: "",
    status: "published",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Berita berhasil disimpan!");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#3B9E3F] text-white p-6 mt-14">
                <NavbarAdmin/>
            </div>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 px-6 py-4 flex justify-between items-center">
          <a href="/admin/Dashboard" className="font-bold text-2xl text-[#3B9E3F]">
            EcoNature Admin
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#3B9E3F] hover:text-gray-700">
              <FaBell className="text-2xl" />
            </a>
            <a href="/admin/ProfileAdmin" className="text-[#3B9E3F] hover:text-gray-700">
              <FaUser className="text-2xl" />
            </a>
          </div>
        </nav>  

        {/* Header */}
        <div className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow mb-6 mt-16">
          <div className="flex items-center">
            <i className="fas fa-newspaper text-3xl mr-4"></i>
            <div>
              <h1 className="text-3xl font-semibold">Tambah Berita</h1>
              <p className="text-lg">Tambah berita baru yang akan dipublikasikan di platform EcoNature.</p>
            </div>
          </div>
        </div>

        {/* Form Tambah Berita */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-6 mt-8 space-y-6"
        >
          <div>
            <label htmlFor="judul" className="block text-lg font-semibold mb-2">
              Judul Berita
            </label>
            <input
              type="text"
              id="judul"
              name="judul"
              value={formData.judul}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="tanggal" className="block text-lg font-semibold mb-2">
              Tanggal Berita
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="isi" className="block text-lg font-semibold mb-2">
              Isi Berita
            </label>
            <textarea
              id="isi"
              name="isi"
              value={formData.isi}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="status" className="block text-lg font-semibold mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-[#3B9E3F] text-white py-2 px-6 rounded-md hover:bg-green-500 transition"
            >
              Simpan Berita
            </button>
          </div>
        </form>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a
            href="/berita"
            className="inline-block bg-[#3B9E3F] text-white py-2 px-6 rounded-md hover:bg-green-600 transition"
          >
            <i className="bi bi-arrow-left me-2"></i> Kembali ke Daftar Berita
          </a>
        </div>
      </main>
    </div>
  );
};

export default TambahBeritaAdmin;
