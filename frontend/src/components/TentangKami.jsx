import React from 'react';

const TentangKami = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aghnia',
      role: 'Mahasiswa',
      image: '/images/s1.png',
      content: 'Econature benar-benar menginspirasi saya untuk mengurangi plastik sekali pakai. Panduan dan tips yang mereka sediakan sangat membantu dalam menjalani gaya hidup yang lebih ramah lingkungan!'
    },
    {
      id: 2,
      name: 'Martin',
      role: 'Karyawan',
      image: '/images/s2.png',
      content: 'Platform ini bukan hanya memberi informasi, tapi juga membangun komunitas. Saya merasa termotivasi karena bisa berbagi dan bertukar ide dengan orang-orang yang punya visi yang sama.'
    },
    {
      id: 3,
      name: 'Nancy',
      role: 'Ibu Rumah Tangga',
      image: '/images/s3.png',
      content: 'Terima kasih Econature! Sekarang saya punya sumber daya yang lengkap dan mudah dipahami untuk mulai hidup lebih hijau.'
    },
    {
      id: 4,
      name: 'Nadlyne',
      role: 'Influencer',
      image: '/images/s4.png',
      content: 'Saya suka edukasi dari Econature! Kontennya menarik dan sangat informatif, membuat saya lebih paham betapa pentingnya peran kita dalam menjaga lingkungan.'
    }
  ];

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
                      Beranda &raquo; Tentang Kami
                  </nav>
              </div>
          </div>
      </div>

      <div className="container mx-auto py-12 max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center mt-4 mb-20">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-medium text-[#222222]">
                  Yuk Gabung Bersama EcoNature
                </h2>
                <h1 className="text-4xl font-bold text-[#3B9E3F] leading-tight">
                  Tentang Kami
                </h1>
              </div>
              <p className="text-[#000000] leading-relaxed">
                Econature adalah platform yang didedikasikan untuk menyatukan komunitas 
                dalam menjaga dan melestarikan lingkungan. Kami percaya bahwa perubahan 
                besar dimulai dari langkah kecil yang dilakukan bersama-sama. Dengan berfokus 
                pada edukasi, partisipasi, dan inovasi, Econature menyediakan informasi, acara, 
                dan program yang mendorong tindakan nyata dalam pelestarian alam. Bersama Econature, 
                mari #PilihLestari untuk masa depan bumi yang lebih hijau dan lestari.
              </p>
              <button className="bg-[#3B9E3F] hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group">
                HUBUNGI KAMI
              </button>
            </div>
            <div className="relative w-full md:w-[553px] h-[335px] rounded-xl overflow-hidden mt-1">
              <img
                src="/images/ttg.png"
                alt="EcoNature Team Activity"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center mr-56 mb-16">
          <div>
              <img src="/images/kami.png" 
              alt="Tentang Kami" 
              className="rounded-lg shadow-lg w-[442px] h-[511px]" 
              />
            </div>
            <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#3B9E3F] mb-4">Mengenal Kami Lebih Dekat</h2>
            <div className="grid md:grid-cols-3 gap-6 w-[744px] h-[304px]">
              <div className="w-full bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Visi</h3>
                <p className="text-gray-700">
                  Menjadi inspirasi bagi individu untuk mengurangi plastik sekali pakai, beralih ke alternatif ramah lingkungan, dan
                  menciptakan dampak positif bagi planet melalui pengetahuan dan komunitas yang mendukung.
                </p>
              </div>

              <div className="w-full bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Misi</h3>
                <p className="text-gray-700">
                  Misi Econature adalah mendukung kehidupan bebas plastik sekali pakai dengan menyediakan edukasi, komunitas, untuk
                  mendorong kesadaran dan aksi berkelanjutan.
                </p>
              </div>

              <div className="w-full bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Goals</h3>
                <p className="text-gray-700">
                  Goals EcoNature adalah membantu pengurangan sampah plastik dan membangun komunitas yang peduli lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-medium text-[#222222] mb-2">Kenapa kamu harus</h1>
              <h2 className="text-4xl font-bold text-[#3B9E3F]">Memilih EcoNature</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="bi bi-people-fill text-2xl text-[#3B9E3F]"></i>
                </div>
                <h3 className="text-xl font-semibold">Relawan</h3>
                <p className="text-gray-600">
                  Gabung bersama EcoNature dan jadilah relawan untuk aksi nyata demi bumi. Setiap aksi kecil Anda bisa menciptakan dampak besar!
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="bi bi-megaphone-fill text-2xl text-[#3B9E3F]"></i>
                </div>
                <h3 className="text-xl font-semibold">Pengaduan</h3>
                <p className="text-gray-600">
                  Pengaduan Anda adalah langkah nyata untuk lingkungan yang lebih bersih dan sehat. Mari buat perubahan bersama!
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="bi bi-newspaper text-2xl text-[#3B9E3F]"></i>
                </div>
                <h3 className="text-xl font-semibold">Informasi dan Berita Terkini</h3>
                <p className="text-gray-600">
                  Ikuti berita dan event terbaru dari EcoNature! Bergabunglah dalam aksi ramah lingkungan yang seru!
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="bi bi-book-fill text-2xl text-[#3B9E3F]"></i>
                </div>
                <h3 className="text-xl font-semibold">Edukasi</h3>
                <p className="text-gray-600">
                  Tingkatkan kesadaran lingkungan bersama EcoNature! Kami hadir mengedukasi tentang plastik dan solusinya demi menjaga bumi tetap hijau untuk generasi mendatang.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 mt-6">Daftar Relawan</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-[514px] h-[70px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[514px] h-[70px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Nomor Handphone"
                  className="w-[514px] h-[70px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                />
              </div>
              <button 
                type="submit"
                className="w-[514px] h-[70px] bg-[#3B9E3F] text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 mb-4">
                <a href="/Relawan"> 
                  DAFTAR
                </a> 
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mb-2">
          <h2 className="text-2xl font-medium text-[#222222] mb-2">Testimoni</h2>
          <h3 className="text-4xl font-bold text-[#3B9E3F]">Apa Pendapat Masyarakat Tentang Kami?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <p className="text-gray-600">&quot;{testimonial.content}&quot;</p>
              </div>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-12 h-12 rounded-full bg-gray-100 object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2 mb-6">
          <div className="w-8 h-2 bg-green-500 rounded-full"></div>
          <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;