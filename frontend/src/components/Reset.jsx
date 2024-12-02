import { useState } from 'react';

const Reset = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    // Fungsi untuk menangani form submit
    const handleResetPassword = async (e) => {
      e.preventDefault();
  
      try {
        // Mengirimkan request ke backend
        const response = await fetch('http://localhost:5000/auth/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, newPassword }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Menampilkan pesan sukses jika berhasil
          setSuccessMessage('Password berhasil diperbarui');
          setErrorMessage('');
        } else {
          // Menampilkan pesan error jika ada masalah
          setErrorMessage(data.error || 'Gagal memperbarui password');
          setSuccessMessage('');
        }
      } catch (error) {
        // Menangani error jaringan
        setErrorMessage('Terjadi kesalahan, coba lagi nanti');
        setSuccessMessage('');
      }
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email Anda"
              />
            </div>
  
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Password Baru</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan password baru"
              />
            </div>
  
            {/* Menampilkan pesan kesalahan atau sukses */}
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
  
            <button
              type="submit"
              className="w-full bg-[#3B9E3F] text-white py-3 rounded-md hover:bg-green-700 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    );
  };
  

export default Reset;
