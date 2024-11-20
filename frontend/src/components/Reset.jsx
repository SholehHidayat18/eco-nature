import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetForm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSendCode = () => {
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
        
        <form onSubmit={handleSubmit}>
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
                <button
                  type="button"
                  onClick={handleSendCode}
                  className="px-4 py-2 bg-[#66BB6A] text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Kirim Kode
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[#000000] mb-2 font-medium" htmlFor="code">
                Masukkan Kode
              </label>
              <input
                id="code"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan kode"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

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