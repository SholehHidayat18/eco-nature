import React from 'react';



const news = [
  {
    id: 1,
    title: 'Daur Ulang Sampah Plastik',
    date: '10 Oktober, 2024',
    comments: '123 Komentar',
    image: '/images/daur.png',
    featured: true
  },
  {
    id: 2,
    title: 'Gerakan Menanam 1 Juta Pohon untuk Masa Depan Hijau',
    date: '29 September, 2024',
    image: '/images/masadepan.png'
  },
  {
    id: 3,
    title: 'Kampanye Anti Plastik Sekali Pakai Solusi untuk Bumi Lebih Bersih',
    date: '29 September, 2024',
    image: '/images/kampanye.png'
  }
];

const donationAmounts = [
  5000, 10000, 25000, 50000, 75000, 100000, 200000
];

const Home = () => {
  {
    
  }
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
          <button className="bg-[#66BB6A] text-white px-8 py-3 rounded-lg w-fit hover:bg-green-700">
            <a href="/daftar">
              MULAI
            </a>
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
            <h2 className="text-3xl font-bold text-[#66BB6A] mb-4">Tentang Kami</h2>
            <p className="text-gray-600 mb-6">
            Selamat datang di Econature!
            <p>Kami percaya perubahan besar dimulai dari hal kecil. Bersama-sama menciptakan dunia yang lebih bersih, mari tingkatkan kesadaran akan dampak plastik sekali pakai dan beralih ke solusi ramah lingkungan.</p><br />
            <p>Dengan program komunitas yang seru, acara yang menarik, dan seminar yang penuh inspirasi, Anda dapat belajar sambil bersenang-senang. Bergabunglah dengan kami, dukung kampanye lingkungan, dan jadilah bagian dari perubahan positif untuk bumi kita. Bersama kita bisa, mewujudkan masa depan yang hijau untuk generasi bangsa!</p>

            </p>
            <button className="bg-[#66BB6A] text-white px-6 py-2 rounded hover:bg-green-700">
              <a href="/tentang-kami"> 
                LEBIH LANJUT
              </a> 
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
            <button className="w-full bg-[#66BB6A] text-white py-3 rounded-md hover:bg-green-600 transition-colors font-medium">
              <a href="/Donasi"> 
                MULAI DONASI
              </a> 
            </button>
          </div>
        </div>
      </div>

        <div className="container max-w-7xl mx-auto px-4 bg-white py-16 ">
          <h2 className="text-[#222222] font-medium text-2xl mb-2">Laporkan Keluhan anda!</h2>
          <h1 className="text-4xl text-[#66BB6A] font-bold">Pengaduan Econature</h1><br />
            <div className="grid grid-cols-3 gap-16 mb-16">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-48 bg-cover bg-center">
                  <img
                    src="/images/e1.png"
                    alt="Background Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span>• 21 Mei, 2024</span>
                    </div>
                  </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sampah yang menumpuk ditepi jalan</h3>
                <div className='space-x-2'>
                  <i class="bi bi-geo-alt-fill text-[#689F38]"></i>
                  <span className="text-gray-700"> Pekanbaru, Riau, Indonesia</span>
                </div>
              </div>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-48 bg-cover bg-center">
                  <img
                    src="/images/e2.png"
                    alt="Beach Cleanup Event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span>• 20 Maret, 2024</span>
                    </div>
                  </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sampah yang menumpuk dipembuangan sampah</h3>
                <div className='space-x-2'>
                  <i class="bi bi-geo-alt-fill text-[#689F38]"></i>
                  <span className="text-gray-700"> Tegal, Jawa Tengah, Indonesia</span>
                </div>
              </div>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-48 bg-cover bg-center">
                  <img
                    src="/images/e3.png"
                    alt="Background Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span>• 21 Januari, 2024</span>
                    </div>
                  </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sampah yang menumpuk ditepi sungai </h3>
                <div className='space-x-2'>
                  <i class="bi bi-geo-alt-fill text-[#689F38]"></i>
                  <span className="text-gray-700">Kota Jambi, Jambi, Indonesia</span>
                </div>
              </div>
              </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-[#222222] font-medium text-2xl mb-2">Baca Informasi & Berita terbaru kami</h2>
              <h1 className="text-4xl text-[#66BB6A] font-bold">Informasi & Berita</h1>
            </div>
              <button className="bg-[#66BB6A] text-white px-6 py-2 rounded-md hover:bg-green-600">
                <a href="/Berita"> 
                LEBIH LANJUT
                </a> 
              </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
          <div className="col-span-1 lg:col-span-1">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-[410px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className='space-x-2'>
                    <i class="bi bi-calendar text-[#689F38]"></i>
                    <span>{news[0].date}</span>
                  </div>
                  <div className='space-x-2'>
                    <i class="bi bi-chat-dots text-[#689F38]"></i>
                    <span>{news[0].comments}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{news[0].title}</h3>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1 space-y-6">
            {news.slice(1).map((item) => (
              <div key={item.id} className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-56 h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <div className='space-x-2'>
                      <i class="bi bi-calendar text-[#689F38]"></i>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="font-bold mt-2 text-2xl">{item.title}</h3>
                  </div>
                  <button className="text-[#66BB6A] hover:text-green-600 text-sm flex items-center gap-1 font-semibold">
                    BACA SELENGKAPNYA
                  </button>
                </div>
              </div>
                ))}
              </div>
            </div>
          </div>
      
    <div className="bg-black text-white py-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-4xl font-bold mb-4">KENAPA ECONATURE?</h2>
        <p className="text-lg mb-8">
          Bergabung dengan Econature untuk aksi nyata menjaga lingkungan, kumpulkan poin dan reward, serta nikmati acara edukatif dan acara eksklusif yang mendukung masa depan lebih hijau.
        </p>
        <button className="bg-[#66BB6A] hover:bg-green-600 text-white font-bold py-3 px-6 rounded">
          <a href="/daftar">
            DAFTAR
          </a>
        </button>
      </div>
      </div><br />

      <div className="max-w-6xl mx-auto p-6 mt-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-[#222222] font-medium text-2xl mb-2">Kumpulkan Pointnya</h2>
          <h1 className="text-4xl text-[#66BB6A] font-bold">Dapatkan Benefitnya</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="bi bi-droplet-fill text-[#66BB6A] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-500 mb-2">
                    Dapatkan Poin dengan Mudah
                  </h3>
                  <p className="text-gray-600">
                    Kumpulkan Poin dengan bergabung dalam keanggotaan EcoNature, ikuti komunitasnya, dan berkontribusi berbagai acara seru
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#66BB6A] rounded-full flex items-center justify-center text-white">
                  1
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="bi bi-cash-stack text-[#66BB6A] text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-500 mb-2">
                    Konversi Poin yang Menarik
                  </h3>
                  <p className="text-gray-600">
                    Tukarkan poin yang kamu kumpulkan dengan voucher dan diskon spesial di acara tahunan kami
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#66BB6A] rounded-full flex items-center justify-center text-white">
                  2
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#66BB6A] rounded-lg p-6 text-white">
            <h3 className="text-2xl font-bold mb-6">Poin Saya</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="nama pengguna"
                className="w-full p-3 rounded-md text-gray-800"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="total poin"
                  className="w-full p-3 rounded-md text-gray-800"
                />
                <i className="bi bi-coin text-yellow-400 absolute right-3 top-1/2 transform -translate-y-1/2 text-xl"></i>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-[#66BB6A] hover:bg-green-700 py-2 px-2 rounded-md transition duration-300 text-sm mt-4">
                  LIHAT RIWAYAT
                </button>
                <button className="bg-[#66BB6A] hover:bg-green-700 py-2 px-2 rounded-md transition duration-300 text-sm mt-4">
                  PENUKARAN POIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;