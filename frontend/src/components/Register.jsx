import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nohp, setTelp] = useState('');
  const [konfirmasipw, setKonfirmasipw] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logic register disini
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKonfirmasiPasswordChange = (e) => {
    setKonfirmasipw(e.target.value);
    
    if (e.target.value !== password) {
      setErrorMessage("Kata sandi dan konfirmasi kata sandi tidak cocok.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-16
    " style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#000000]">
          Bergabunglah dengan Econature
        </h2>
        <p className="text-center text-[#000000] mb-6">
          Dapatkan Dukungan, Pelajari Lebih Dalam Menuju Lingkungan Bersih
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
          <div>
              <label className="block text-[#000000] mb-2 font-medium" htmlFor="email">
                Nama
              </label>
              <input
                id="name"
                type="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
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
              />
            </div>

            <div>
              <label className="block text-[#000000] mb-2 font-medium" htmlFor="nohp">
                Nomor Handphone
              </label>
              <input
                id="nohp"
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan nomor handphone"
                value={nohp}
                onChange={(e) => setTelp(e.target.value)}
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
                onChange={handlePasswordChange}
              />
            </div>

            <div>
                <label className="block text-[#000000] mb-2 font-medium" htmlFor="konfirmasipw">
                    Konfirmasi Kata Sandi
                </label>
                <input
                    id="konfirmasipw"
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Masukkan ulang kata sandi"
                    value={konfirmasipw}
                    onChange={handleKonfirmasiPasswordChange}
                />
            </div>
                {errorMessage && (
                    <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
            <button
              type="submit"
              className="w-full bg-[#66BB6A] font-medium text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Daftar Sekarang
            </button>

           

          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[#000000] font-medium">Atau</p>
        </div>

        <button
          className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition duration-300 text-[#000000] font-medium"
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
                Sudah punya akun?{" "} 
                <span className="text-[#66BB6A] font-medium hover:text-green-600">
                <Link to="/masuk">Masuk Disini</Link>
                </span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;