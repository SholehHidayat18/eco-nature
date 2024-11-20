import React from 'react';

const EduCard = ({ date, comments, title, imageUrl, newsLink }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full w-[367px] h-[481px]">
    <div className="relative w-[367px] h-[242px]">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex flex-col h-full">
        <div className="relative pb-4">
            <h2 className="text-2xl font-bold mt-3 ml-3">{title}</h2>
        </div>

        <div className="flex-grow"></div>

        <div className="px-3 pb-4">
                <a 
                href={newsLink}
                className="text-[#66BB6A] hover:text-green-600 font-bold"
                >
                BACA SELENGKAPNYA
                </a>
                <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                <div className="flex items-center">
                    <i className="bi bi-calendar text-[#689F38] mr-2"></i>
                    <span>{date}</span>
                </div>
                <div className="flex items-center">
                    <i className="bi bi-chat-dots text-[#689F38] mr-2"></i>
                    <span>{comments}</span>
                </div>
            </div>
        </div>
    </div> 
  </div>
);

const Edukasi = () => {
  const edu = [
    {
      id: 1,
      imageUrl: '/images/w1.png',
      title: "Pengenalan Dasar Plastik",
      newsLink: '/Edukasi1',
      date: " 1 Oktober, 2024",
      comments: "34 Komentar"
    },
    {
      id: 2,
      imageUrl: "/images/w2.png",
      title: "Dampak Sampah Plastik ",
      newsLink: '/Edukasi2',
      date: "2 Oktober, 2024",
      comments: "134 Komentar"
    },
    {
      id: 3,
      imageUrl: "/images/w3.png",
      title: "Solusi Pengurangan Plastik ",
      newsLink: '/Edukasi3',
      date: "3 Oktober, 2024",
      comments: "101 Komentar"
    },
    {
      id: 4,
      imageUrl: "/images/w4.png",
      title: "Perubahan Iklim dan Dampaknya",
      newsLink: '/Edukasi4',
      date: " 1 November, 2024",
      comments: "67 Komentar"
    },
    {
      id: 5,
      imageUrl: "/images/w5.png",
      title: "Keanekanragaman Hayati dan Konversi",
      newsLink: '/Edukasi5',
      date: " 2 November, 2024",
      comments: "54 Komentar"
    },
    {
      id: 6,
      imageUrl: "/images/w6.png",
      title: "Dasar-Dasar Lingkungan Hidup",
      newsLink: '/Edukasi6',
      date: "3 November, 2024",
      comments: "44 Komentar"
    }
  ];

  return (
    <div className="min-h-screen bg-white ">
      <div className="relative h-96 overflow-hidden mb-16">
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
                      Beranda &raquo; Fitur &raquo; Edukasi
                  </nav>
              </div>
          </div>
      </div>

      <div className="container mx-auto p-4 mt-8 mb-8ao max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {edu.map((edu, index) => (
            <EduCard key={index} {...edu} />
            ))}
        </div>
        
        <div className="flex justify-center items-center space-x-2 mb-16">
            <button className="p-2 rounded-md border hover:bg-gray-100">
            <i className="bi bi-chevron-left"></i>
            </button>
            <button className="p-2 rounded-md bg-green-500 text-white">1</button>
            <button className="p-2 rounded-md border hover:bg-gray-100">2</button>
            <button className="p-2 rounded-md border hover:bg-gray-100">3</button>
            <button className="p-2 rounded-md border hover:bg-gray-100">
            <i className="bi bi-chevron-right"></i>
            </button>
        </div>
        </div>
    </div>
  );
};


export default Edukasi;