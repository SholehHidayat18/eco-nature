import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Role yang dipilih
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { login: contextLogin } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }), // Kirim role ke backend
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Login berhasil! Selamat datang.');
        contextLogin(data.token, data.user.role, data.user.name);

        // Navigasi sesuai role
        navigate(data.user.role === 'admin' ? '/admin/dashboard-admin' : '/home');
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
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-16">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-black">
                Alamat Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-medium text-black">
                Kata Sandi
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 text-white font-medium rounded-md ${
                isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-700'
              }`}
            >
              {isLoading ? 'Memuat...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
