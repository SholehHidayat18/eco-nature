import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Menambahkan status loading

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Menampilkan loading saat proses login
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Login berhasil! Selamat datang.');
        setErrorMessage('');

        // Simpan token di localStorage (jika ada)
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        // Navigasi ke halaman beranda (home) setelah login berhasil
        setTimeout(() => navigate('/'), 2000); // Mengarahkan ke halaman beranda
      } else {
        setErrorMessage(data.error || 'Login gagal. Silakan periksa email dan kata sandi Anda.');
      }
    } catch (error) {
      setErrorMessage('Gagal menghubungi server. Silakan coba lagi nanti.');
    } finally {
      // Hentikan status loading setelah proses selesai
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-16"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#000000]">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-[#000000] mb-2 font-medium" htmlFor="email">
                Alamat Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-[#000000] mb-2 font-medium" htmlFor="password">
                Kata Sandi
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            <button
              type="submit"
              className={`w-full font-medium text-white py-2 rounded-md transition duration-300 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#66BB6A] hover:bg-green-600'}`}
              disabled={isLoading}
            >
              {isLoading ? 'Memuat...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/reset')}
            className="text-blue-500 hover:underline"
          >
            Lupa Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
