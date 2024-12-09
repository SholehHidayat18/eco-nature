import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsService from "../service/NewsService";
import PengaduanService from '../service/PengaduanService';
import { useAuth } from '../context/AuthContext';
import EducationService from '../service/EducationService';

const donationAmounts = [
  5000, 10000, 25000, 50000, 75000, 100000, 200000
];

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pengaduans, setPengaduans] = useState([]);
  const { isAuth } = useAuth(); // State to store fetched data

  useEffect(() => {
    const fetchPengaduans = async () => {
      try {
        const data = await PengaduanService.getPengaduan();
        setPengaduans(data);
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch pengaduans');
        setIsLoading(false);
      }
    };

    fetchPengaduans();
  }, []);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        setIsLoading(true);
        const educations = await EducationService.getEducations();
        setEducationData(educations);
        console.log(educations)
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducations();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await NewsService.getNewses(); // Panggil service API

        setNewsData(response);
        console.log(response)
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat memuat data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleNavigation = (id) => {
    if (!isAuth) {
      // Jika belum autentikasi, arahkan ke halaman login
      return "/masuk";
    }
    // Jika sudah autentikasi, arahkan ke halaman pengaduan
    return `/Pengaduan/${id}`;
  };
  const handleNavigationNews = (id) => {
    if (!isAuth) {
      // Jika belum autentikasi, arahkan ke halaman login
      return "/masuk";
    }
    // Jika sudah autentikasi, arahkan ke halaman pengaduan
    return `/Berita/${id}`;
  };
  const handleNavigationEducation = (id) => {
    if (!isAuth) {
      // Jika belum autentikasi, arahkan ke halaman login
      return "/masuk";
    }
    // Jika sudah autentikasi, arahkan ke halaman pengaduan
    return `/Edukasi/${id}`;
  };

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-2">
            Yuk Gabung Bersama
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-2">
            ECONATURE
          </h1>
          <p className="text-white text-lg mb-12">
            Kurangi plastik, tambahkan senyuman untuk Bumi kita!
          </p>
          <button className="bg-[#3B9E3F] text-white px-8 py-3 rounded-lg w-fit hover:bg-green-700">
            <Link to="/daftar" onClick={handleToTop}>
              MULAI
            </Link>
          </button>
        </div>
      </div>
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="/images/daurulang.png" alt="Recycle" className="rounded-lg shadow-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Daur Ulang</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="/images/nanampohon.png" alt="Recycle" className="rounded-lg shadow-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Penanaman Pohon</h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/tentangkami.png" alt="About Econature" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#3B9E3F] mb-4">Tentang Kami</h2>
            <p className="text-gray-600 mb-6">
              Selamat datang di Econature!
              <p>Kami percaya perubahan besar dimulai dari hal kecil. Bersama-sama menciptakan dunia yang lebih bersih, mari tingkatkan kesadaran akan dampak plastik sekali pakai dan beralih ke solusi ramah lingkungan.</p><br />
              <p>Dengan program komunitas yang seru, acara yang menarik, dan seminar yang penuh inspirasi, Anda dapat belajar sambil bersenang-senang. Bergabunglah dengan kami, dukung kampanye lingkungan, dan jadilah bagian dari perubahan positif untuk bumi kita. Bersama kita bisa, mewujudkan masa depan yang hijau untuk generasi bangsa!</p>

            </p>
            <button className="bg-[#3B9E3F] text-white px-6 py-2 rounded hover:bg-green-700">
              <Link to="/tentang-kami" onClick={handleToTop}>
                LEBIH LANJUT
              </Link>
            </button>
          </div>
        </div>
      </section>

      <div className="relative w-full min-h-[500px] mt-2">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nanam.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-40 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Bersama Wujudkan Dunia Lebih Baik
            </h1>
            <p className="text-lg opacity-90">
              Setiap donasi Anda membantu mengurangi sampah plastik dan menjaga alam kita tetap lestari. Bersama, kita bisa mewujudkan masa depan yang lebih bersih dan hijau.
            </p>
          </div>
          <div className="lg:w-1/2 bg-white/10 backdrop-transparent rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#FFFFFF]">Jumlah Donasi</h2>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:border-green-500 transition-colors"
                >
                  {amount.toLocaleString()}
                </button>
              ))}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Lainnya"
                  className="w-full p-2 rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                />
              </div>
            </div>
            <button className="w-full bg-[#3B9E3F] text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
              <Link to="/donasi" onClick={handleToTop}>
                MULAI DONASI
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 bg-white py-16 ">
        <h2 className="text-[#222222] font-medium text-2xl mb-2">Laporkan Keluhan anda!</h2>
        <h1 className="text-4xl text-[#3B9E3F] font-bold">Pengaduan Econature</h1><br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {isLoading ? (
            <div className="col-span-3 text-center py-6">
              <p className="text-gray-500 text-lg">Loading...</p>
            </div>
          ) : error ? (
            <div className="col-span-3 text-center py-6">
              <p className="text-red-500 text-lg">Terjadi kesalahan: {error}</p>
            </div>
          ) : (
            pengaduans.slice(0, 3).map((pengaduan) => (
              <Link
                key={pengaduan.id}
                onClick={handleToTop}
                to={handleNavigation(pengaduan.id)}
                className="block bg-gray-100 rounded-lg overflow-hidden transform shadow-sm transition-shadow duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-48 bg-cover bg-center">
                  <img
                    src={pengaduan.imagePath ? `/images/pengaduan/${pengaduan.imagePath}` : `/images/p1.png`}
                    alt={pengaduan.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span>• {pengaduan.formattedDate}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pengaduan.title}</h3>
                  <div className="space-x-2">
                    <i className="bi bi-geo-alt-fill text-[#689F38]"></i>
                    <span className="text-gray-700">{pengaduan.alamat}</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-[#222222] font-medium text-2xl mb-2">Baca Informasi & Berita terbaru kami</h2>
            <h1 className="text-4xl text-[#3B9E3F] font-bold">Informasi & Berita</h1>
          </div>
          <button className="bg-[#3B9E3F] text-white px-6 py-2 rounded-md hover:bg-green-700">
            <a href="/Berita">LEBIH LANJUT</a>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
          {isLoading ? (
            <div className="col-span-2 text-center py-6">
              <p className="text-gray-500 text-lg">Loading...</p>
            </div>
          ) : error ? (
            <div className="col-span-2 text-center py-6">
              <p className="text-red-500 text-lg">Terjadi kesalahan: {error}</p>
            </div>
          ) : newsData.length > 0 ? (
            <>
              <Link
                onClick={handleToTop}
                to={handleNavigationNews(newsData[0].id)}
                className="block bg-gray-100 rounded-lg overflow-hidden transform shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="col-span-1 lg:col-span-1">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src={newsData[0].imagePath ? `/images/berita/${newsData[0].imagePath}` : `/images/b1.png`}
                      alt={newsData[0].title}
                      className="w-full h-[410px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="space-x-2">
                          <i className="bi bi-calendar text-[#689F38]"></i>
                          <span>{newsData[0].formattedCreatedAt}</span>
                        </div>
                        <div className="space-x-2">
                          <i className="bi bi-chat-dots text-[#689F38]"></i>
                          <span>{newsData[0].comments.length} Komentar</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">{newsData[0].title}</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="col-span-1 lg:col-span-1 space-y-6">
                {newsData.slice(1, 3).map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      src={item.imagePath ? `/images/berita/${item.imagePath}` : `/images/b1.png`}
                      alt={item.title}
                      className="w-56 h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between">
                      <div>
                        <div className="space-x-2">
                          <i className="bi bi-calendar text-[#689F38]"></i>
                          <span className="text-sm text-gray-500">{item.formattedCreatedAt}</span>
                        </div>
                        <h3 className="font-bold mt-2 text-2xl">{item.title}</h3>
                      </div>
                      <Link
                        onClick={handleToTop}
                        to={handleNavigationNews(item.id)}
                        className="text-[#3B9E3F] hover:text-green-700 text-sm flex items-center gap-1 font-semibold"
                      >
                        BACA SELENGKAPNYA
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="col-span-2 text-center py-6">
              <p className="text-gray-500 text-lg">Tidak ada berita tersedia.</p>
            </div>
          )}
        </div>


      </div>

      <div className="bg-black text-white py-8 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h2 className="text-4xl font-bold mb-4">KENAPA ECONATURE?</h2>
          <p className="text-lg mb-8">
            Bergabung dengan Econature untuk aksi nyata menjaga lingkungan, kumpulkan poin dan reward, serta nikmati acara edukatif dan acara eksklusif yang mendukung masa depan lebih hijau.
          </p>
          <button className="bg-[#3B9E3F] hover:bg-green-700 text-white font-bold py-3 px-6 rounded">
            <Link to="/daftar" onClick={handleToTop}>
              DAFTAR
            </Link>
          </button>
        </div>
      </div><br />

      <div className="max-w-7xl mx-auto p-6 mt-4 mb-16">
        <div className="text-left mb-12">
          <h2 className=" font-medium text-2xl mb-2 text-[#222222]" >Artikel Pengetahuan</h2>
          <h1 className="text-4xl text-[#3B9E3F] font-bold">Edukasi Econature</h1>
        </div>

        <div className="grid w-full md:grid-cols-3 gap-12">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            educationData.slice(0, 3).map((education) => (
              <div
                key={education.id}
                className="w-full bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transform duration-300"
              >
                <div className="h-[240px] relative">
                  <img
                    src={education.imagePath ? `/images/educations/${education.imagePath}` : `/images/e1.png`}
                    alt="artikel 1"
                    className="absolute w-full h-full object-cover bg-black bg-opacity-50 rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-gray-800 to-transparent "></div>
                  <span className="text-white font-semibold absolute bottom-4 left-4">{education.formattedDate}</span>
                </div>
                <div className='w-full flex flex-col space-y-2 py-4 px-8'>
                  <span className='text-[24px] font-bold text-black line-clamp-1'>{education.title}</span>
                  <Link
                    onClick={handleToTop}
                    to={handleNavigationEducation(education.id)}
                    className="text-[#3B9E3F] hover:text-green-700 px-4  text-lg flex items-center gap-1 font-semibold"
                  >
                    BACA SELENGKAPNYA
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;