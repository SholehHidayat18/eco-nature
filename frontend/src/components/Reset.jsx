import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ResetForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setMessage('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/reset-password', {
        email,
        newPassword,
      });

      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred.');
      setMessage('');
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-8"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#000000]">
          Reset Kata Sandi Anda
        </h2>
        <p className="text-center text-[#000000] mb-6">
          Dapatkan Dukungan, Pelajari Lebih Dalam Menuju Lingkungan Bersih
        </p>

        {message && (
          <p className="text-green-500 text-center mb-4 font-medium">{message}</p>
        )}
        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                className="block text-[#000000] mb-2 font-medium"
                htmlFor="email"
              >
                Alamat Email
              </label>
              <div className="flex gap-3">
                <input
                  id="email"
                  type="email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan alamat email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-[#000000] mb-2 font-medium"
                htmlFor="newPassword"
              >
                Kata Sandi Baru
              </label>
              <input
                id="newPassword"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan kata sandi baru"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-[#000000] mb-2 font-medium"
                htmlFor="confirmPassword"
              >
                Konfirmasi Kata Sandi Baru
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan ulang kata sandi baru"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3B9E3F] font-medium text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Ganti Kata Sandi
            </button>
          </div>
        </form>
        <div className="mt-6 text-center space-y-2">
          <p className="text-[#3B9E3F] font-medium hover:text-green-600">
            <Link to="/masuk">Kembali ke halaman masuk?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetForm;