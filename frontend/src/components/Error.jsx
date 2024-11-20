import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="relative h-96 overflow-hidden">
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
                      Beranda &raquo; Informasi & Berita
                  </nav>
              </div>
          </div>
      </div>
    
    <div className="h-[500px] bg-white flex items-center justify-center p-4">
        <div className="relative max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
            <img 
                src="/images/panda.png" 
                alt="Panda with baby panda" 
                className="w-full h-auto object-contain"
            />
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="space-y-4">
                <div className="space-y-2">
                <h1 className="text-[#66BB6A] text-4xl font-medium">Something</h1>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                    <h1 className="text-[#222222] text-4xl font-medium">Went</h1>
                    <h1 className="text-[#66BB6A] text-4xl font-medium">Wrong!</h1>
                </div>
                </div>
                
                <div className="text-gray-700 text-[200px] font-bold leading-none">
                404
                </div>
                
                <a 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#66BB6A] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
                >
                <i className="bi bi-house-door-fill"></i>
                PERGI KE BERANDA
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Error;