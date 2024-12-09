import React from "react";
import NavbarAdmin from "../NavbarAdmin";

const EditPengaduanAdmin = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mt-16">
      {/* Navbar */}
      <NavbarAdmin />
      <div className="bg-white max-w-lg w-full p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold">Edit Pengaduan</h1>
        </div>
        <form>
          {/* Judul Pengaduan */}
          <div className="mb-4">
            <label
              htmlFor="judulPengaduan"
              className="block text-gray-700 font-medium mb-2"
            >
              Judul Pengaduan
            </label>
            <input
              type="text"
              id="judulPengaduan"
              placeholder="Masukkan judul pengaduan"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Tanggal Pengaduan */}
          <div className="mb-4">
            <label
              htmlFor="tanggalPengaduan"
              className="block text-gray-700 font-medium mb-2"
            >
              Tanggal Pengaduan
            </label>
            <input
              type="date"
              id="tanggalPengaduan"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Nama Pengadu */}
          <div className="mb-4">
            <label
              htmlFor="namaPengadu"
              className="block text-gray-700 font-medium mb-2"
            >
              Nama Pengadu
            </label>
            <input
              type="text"
              id="namaPengadu"
              placeholder="Masukkan nama pengadu"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Nama Lengkap */}
          <div className="mb-4">
            <label
              htmlFor="namaLengkap"
              className="block text-gray-700 font-medium mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="namaLengkap"
              placeholder="Masukkan nama lengkap"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Email Pengadu */}
          <div className="mb-4">
            <label
              htmlFor="emailPengadu"
              className="block text-gray-700 font-medium mb-2"
            >
              Alamat Email
            </label>
            <input
              type="email"
              id="emailPengadu"
              placeholder="Masukkan alamat email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Nomor Handphone */}
          <div className="mb-4">
            <label
              htmlFor="nomorHandphone"
              className="block text-gray-700 font-medium mb-2"
            >
              Nomor Handphone
            </label>
            <input
              type="text"
              id="nomorHandphone"
              placeholder="Masukkan nomor handphone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Alamat Pengadu */}
          <div className="mb-4">
            <label
              htmlFor="alamatPengadu"
              className="block text-gray-700 font-medium mb-2"
            >
              Alamat
            </label>
            <textarea
              id="alamatPengadu"
              rows="3"
              placeholder="Masukkan alamat lengkap"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Deskripsi Keadaan */}
          <div className="mb-4">
            <label
              htmlFor="deskripsiKeadaan"
              className="block text-gray-700 font-medium mb-2"
            >
              Deskripsi Keadaan
            </label>
            <textarea
              id="deskripsiKeadaan"
              rows="4"
              placeholder="Masukkan deskripsi keadaan pengaduan"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Gambar Pengaduan */}
          <div className="mb-4">
            <label
              htmlFor="gambarPengaduan"
              className="block text-gray-700 font-medium mb-2"
            >
              Kumpulan Gambar
            </label>
            <input
              type="file"
              id="gambarPengaduan"
              multiple
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>

          {/* Status Pengaduan */}
          <div className="mb-4">
            <label
              htmlFor="statusPengaduan"
              className="block text-gray-700 font-medium mb-2"
            >
              Status Pengaduan
            </label>
            <select
              id="statusPengaduan"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
              required
            >
              <option value="pending">Pending</option>
              <option value="ditanggapi">Ditanggapi</option>
              <option value="ditolak">Ditolak</option>
            </select>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
          >
            Simpan Perubahan
          </button>
          <a
            href="/admin/DashboardAdmin"
            className="block text-center bg-gray-300 text-gray-700 py-3 rounded-lg font-medium mt-3 hover:bg-gray-400 transition"
          >
            Kembali
          </a>
        </form>
      </div>
    </div>
  );
};

export default EditPengaduanAdmin;
