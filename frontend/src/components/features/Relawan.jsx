import React from 'react';

const Relawan = () => {
    return (
      <div className="min-h-screen bg-white">
        <div className="relative h-96 overflow-hidden mb-4">
          <img 
            src="/images/header.jpg"
            alt="Waterfall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0">
            <div className="container mx-auto px-6 h-full flex flex-col justify-center">
              <h1 className="text-6xl md:text-5xl text-white font-bold mb-4 ml-16">
                Econature: Bersama untuk Bumi yang <br /> Lebih Lestari
              </h1>
              <nav className="text-white/90 text-2xl ml-16">
                Beranda &raquo; Fitur &raquo; Relawan
              </nav>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto py-12 max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center mb-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-[#000000]">
                    Ayo Menjadi Relawan!
                </h2>
                <h1 className="text-5xl font-bold text-[#3B9E3F] leading-tight">
                    Econature
                </h1>
              </div>
              
              <p className="text-[#000000] leading-relaxed">
                EcoNature mengundang kamu untuk menjadi relawan dan ikut serta dalam kegiatan penghijauan bumi 
                di waktu-waktu tertentu! Setelah berpartisipasi, kamu akan mendapatkan sertifikat penghargaan 
                sebagai bentuk apresiasi atas kontribusi berharga dalam menjaga lingkungan.
              </p>
              
              <p className="text-[#000000] leading-relaxed">
                Jadi, jangan lewatkan kesempatan untuk terlibat dalam aksi nyata ini! Pantau terus website kami 
                untuk informasi terbaru mengenai jadwal kegiatan dan cara bergabung. Bersama, kita bisa membuat 
                perubahan positif untuk bumi!
              </p>
              
              <button className="bg-[#3B9E3F] hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group">
                <a href="/Daftar-Relawan">DAFTAR</a>
              </button>
            </div>
    
            <div className="relative w-full md:w-[553px] h-[335px] rounded-xl overflow-hidden">
              <img
                src="/images/relawan.png"
                alt="EcoNature Team Activity"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Relawan;
  