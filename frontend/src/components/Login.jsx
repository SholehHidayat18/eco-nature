import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

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

        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        setTimeout(() => navigate('/'), 2000); 
      } else {
        setErrorMessage(data.error || 'Login gagal. Silakan periksa email dan kata sandi Anda.');
      }
    } catch (error) {
      setErrorMessage('Gagal menghubungi server. Silakan coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">
          Bergabunglah dengan Econature
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Dapatkan Dukungan, Pelajari Lebih Dalam Menuju Lingkungan Bersih
        </p>
        
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
                placeholder="Masukkan alamat email"
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
              className="w-full bg-[#66BB6A] font-medium text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'Memuat...' : 'Login'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[#000000] font-medium">Atau</p>
        </div>

        <button
          className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition duration-300 font-medium text-[#000000]"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        <div className="mt-6 text-center space-y-2">
          <p className="text-[#000000] font-medium">
            Belum punya akun?{" "} 
              <span className="text-[#66BB6A] font-medium hover:text-green-600">
                <Link to="/daftar">Daftar disini</Link>
              </span>
          </p>
          <p className="text-[#66BB6A] hover:text-green-600 font-medium">
            <Link to="/reset">Lupa Kata sandi?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;