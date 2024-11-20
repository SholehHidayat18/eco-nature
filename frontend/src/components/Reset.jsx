import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async (e) => {
      e.preventDefault();

      if (newPassword !== confirmationPassword) {
          setErrorMessage('Kata sandi baru dan konfirmasi kata sandi tidak cocok.');
          return;
      }

      try {
          const response = await fetch('http://localhost:5000/auth/reset-password', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, newPassword }),
          });

          const data = await response.json();

          if (response.ok) {
              setSuccessMessage('Password berhasil direset. Silakan masuk dengan kata sandi baru Anda.');
              setErrorMessage('');
          } else {
              setErrorMessage(data.error || 'Terjadi kesalahan saat mereset kata sandi.');
          }
      } catch (error) {
          setErrorMessage('Gagal menghubungi server. Silakan coba lagi nanti.');
      }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#000000]">
            Reset Kata Sandi Anda
        </h2>
        <p className="text-center text-[#000000] mb-6">
            Kami akan mengirimkan kode ke email untuk mereset kata sandi anda
        </p>
        
        <form onSubmit={handleResetPassword}>
          <div className="space-y-4">
            <div>
              <label className="block text-[#000000] mb-2 font-medium" htmlFor="email">
                Alamat Email
              </label>
              <div className="flex gap-3">
                <input
                  id="email"
                  type="email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-[#000000] mb-2 font-medium" htmlFor="newPassword">
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
              <label className="block text-[#000000] mb-2 font-medium" htmlFor="confirmPassword">
                Konfirmasi Kata Sandi baru
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan ulang kata sandi baru"
                value={confirmationPassword}
                onChange={(e) => setConfirmationPassword(e.target.value)}
              />
            </div>
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 mt-2">{successMessage}</p>
              )}
            <button
              type="submit"
              className="w-full bg-[#66BB6A] font-medium text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Ganti Kata Sandi
            </button>

            <div className="mt-6 text-center space-y-2">
                <p className="text-[#66BB6A] font-medium hover:text-green-600">
                <Link to="/masuk">Kembali ke halaman masuk?</Link>
                </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetForm;