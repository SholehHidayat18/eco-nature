import React from "react";

const EditRelawanAdmin = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
          Edit Data Relawan
        </h2>
        <form>
          {/* Nama Relawan */}
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-gray-700 font-medium mb-2"
            >
              Nama Relawan
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Masukkan nama relawan"
              defaultValue="Jane Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email"
              defaultValue="jane.doe@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Nomor Telepon */}
          <div className="mb-4">
            <label
              htmlFor="telepon"
              className="block text-gray-700 font-medium mb-2"
            >
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="telepon"
              name="telepon"
              placeholder="Masukkan nomor telepon"
              defaultValue="+628123456789"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Alamat */}
          <div className="mb-4">
            <label
              htmlFor="alamat"
              className="block text-gray-700 font-medium mb-2"
            >
              Alamat
            </label>
            <textarea
              id="alamat"
              name="alamat"
              rows="3"
              placeholder="Masukkan alamat lengkap"
              defaultValue="Jl. Merdeka No. 45, Jakarta"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Tanggal Bergabung */}
          <div className="mb-4">
            <label
              htmlFor="tanggal"
              className="block text-gray-700 font-medium mb-2"
            >
              Tanggal Bergabung
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              defaultValue="2024-11-12"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              required
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Simpan Perubahan
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-400 transition"
              onClick={() => window.history.back()}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRelawanAdmin;
