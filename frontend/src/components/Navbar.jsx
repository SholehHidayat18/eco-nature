import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { isAuth, userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
    navigate('/profile');
  };
  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     // Mengambil informasi pengguna setelah login menggunakan fetch
  //     fetch('http://localhost:5000/auth/me', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       }, 
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       console.error('Gagal mendapatkan informasi pengguna:', error);
  //     });
  //   }
  // }, []); // Dependensi kosong berarti hanya dijalankan sekali saat komponen pertama kali dimuat

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    //localStorage.removeItem('token');
    logout()
    setUser(null); // Mengatur ulang state pengguna
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1B5E20] px-4 py-4 flex justify-between items-center z-50">
      <div className="flex items-center ml-5">
        <Link to="/" className="text-white no-underline text-2xl font-bold">
          econature.
        </Link>
        <button onClick={toggleMenu} className="hidden md:block">
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      <div className="flex items-center gap-8 mr-10 text-white">
        <ul className="flex list-none gap-2 m-0 p-0">
          <li className="border-l border-white h-5 mx-2.5"></li>
          <li>
            <Link to={isAuth ? '/home' : '/'} className="hover:text-gray-300">
              BERANDA
            </Link>
          </li>
          <li className="border-l border-white h-5 mx-2.5"></li>
          <li>
            <Link to="/tentang-kami" className="hover:text-gray-300">
              TENTANG KAMI
            </Link>
          </li>
          <li className="border-l border-white h-5 mx-2.5"></li>
          <li>
            <Link to="/kontak" className="hover:text-gray-300">
              KONTAK
            </Link>
          </li>
          <li className="border-l border-white h-5 mx-2.5"></li>
          {isAuth && (
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-gray-300 focus:outline-none"
              >
                FITUR
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <Link
                      to="/Donasi"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Donasi
                    </Link>
                    <Link
                      to="/Edukasi"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Edukasi
                    </Link>
                    <Link
                      to="/Relawan"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Relawan
                    </Link>
                    <Link
                      to="/Pengaduan"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Pengaduan
                    </Link>
                    <Link
                      to="/Poin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Poin
                    </Link>
                    <Link
                      to="/Berita"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Informasi dan Berita
                    </Link>
                  </div>
                </div>
              )}
            </li>
          )}

          <li className="border-l border-white h-5 mx-2.5"></li>
          {isAuth || user ? (
            <>
              <li
                className="flex items-center text-white cursor-pointer hover:underline text-lg font-medium"
                onClick={handleNavigateToProfile}
              >
                <span>{userName}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a6 6 0 1116 0H2z"
                  />
                </svg>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/masuk" className="hover:text-gray-300">
                  MASUK
                </Link>
              </li>
              <li className="border-l border-white h-5 mx-2.5"></li>
              <li>
                <Link to="/daftar" className="hover:text-gray-300">
                  DAFTAR
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
