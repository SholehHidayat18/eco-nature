import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Referensi untuk dropdown
  const { isAuth, userName } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  // Tutup dropdown ketika klik di luar elemen dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1B5E20] px-4 py-4 flex justify-between items-center z-[5000]">
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
            <Link to={isAuth ? '/home' : '/'} onClick={handleClose} className="hover:text-gray-300">
              BERANDA
            </Link>
          </li>
          <li className="border-l border-white h-5 mx-2.5"></li>
          <li>
            <Link to="/tentang-kami" onClick={handleClose} className="hover:text-gray-300">
              TENTANG KAMI
            </Link>
          </li>
          <li className="border-l border-white h-5 mx-2.5"></li>
          <li>
            <Link to="/kontak" onClick={handleClose} className="hover:text-gray-300">
              KONTAK
            </Link>
          </li>
          <li className="border-l border-white h-5 mx-2.5"></li>
          {isAuth && (
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-gray-300 focus:outline-none"
              >
                FITUR
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                    }`}
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
                      onClick={handleClose}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Donasi
                    </Link>
                    <Link
                      to="/Edukasi"
                      onClick={handleClose}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Edukasi
                    </Link>
                    <Link
                      to="/Relawan"
                      onClick={handleClose}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Relawan
                    </Link>
                    <Link
                      to="/Pengaduan"
                      onClick={handleClose}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Pengaduan
                    </Link>
                    <Link
                      to="/Berita"
                      onClick={handleClose}
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
          {isAuth ? (
            <Link
              to="/profile"
              className="flex items-center text-white cursor-pointer hover:underline text-lg font-medium"
              onClick={handleClose}
            >
              <span>{userName}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a6 6 0 1116 0H2z" />
              </svg>
            </Link>
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
