import React, { useState } from "react";

const TambahMateriAdmin = () => {
  const [formData, setFormData] = useState({
    judul: "",
    deskripsi: "",
    gambar: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Materi berhasil ditambahkan!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Tambah Materi Edukasi</h1>
        <p className="text-lg">Tambah materi edukasi baru untuk pengguna EcoNature.</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Judul Materi */}
          <div>
            <label htmlFor="judul" className="block text-lg font-medium text-gray-700">
              Judul Materi
            </label>
            <input
              type="text"
              id="judul"
              name="judul"
              value={formData.judul}
              onChange={handleChange}
              placeholder="Masukkan judul materi"
              required
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Deskripsi Materi */}
          <div>
            <label htmlFor="deskripsi" className="block text-lg font-medium text-gray-700">
              Deskripsi Materi
            </label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              rows="4"
              value={formData.deskripsi}
              onChange={handleChange}
              placeholder="Masukkan deskripsi materi"
              required
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>

          {/* Gambar Materi */}
          <div>
            <label htmlFor="gambar" className="block text-lg font-medium text-gray-700">
              Gambar Materi
            </label>
            <input
              type="file"
              id="gambar"
              name="gambar"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Tambah Materi
          </button>
        </form>
      </div>
    </div>
  );
};

export default TambahMateriAdmin;
