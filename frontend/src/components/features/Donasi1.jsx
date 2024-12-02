import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Donasi1 = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="relative h-96 overflow-hidden mb-8">
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
              Beranda &raquo; Fitur &raquo; Donasi &raquo; Lebih Lanjut
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-12">
              <img 
                src="/images/donasi.png" 
                alt="No Plastic Campaign"
                className="w-full rounded-lg mb-6"
              />

              <div className="max-w-5xl mx-auto p-4 bg-gray-50 rounded-lg shadow mb-8">
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                    <div className="h-2.5 w-full bg-gray-200 rounded-full mb-2">
                        <div 
                        className="h-2.5 bg-[#3B9E3F] rounded-full" 
                        style={{ width: '67%' }}
                        ></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="font-semibold">
                                <div>67%</div>
                                <div className="text-gray-500 text-sm ml-1"> • Didanai</div>
                            </span>
                        </div>
                        <div>
                            <span className="font-semibold">
                                <div>Rp 900.000</div>
                                <div className="text-gray-500 text-sm ml-1"> • Terkumpul</div>
                            </span>
                        </div>
                        <div>
                            <span className="font-semibold">
                                <div>Rp 2.000.000</div>
                                <div className="text-gray-500 text-sm ml-1"> • Diperlukan</div>
                            </span>
                        </div>
                    </div>
                </div>

                    <div className="h-12 w-px bg-gray-200"></div>

                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                          5rb
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                          10rb
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                          25rb
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                          50rb
                      </button>
                      <button className="px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                      <a href="/PembayaranDonasi"> DONASI</a>
                      </button>
                    </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-3">Donasi Untuk Menghentikan Pemanasan Global</h2>

              <p className="text-gray-600 leading-relaxed mb-2">
              Pemanasan global adalah fenomena meningkatnya suhu rata-rata bumi yang dipicu oleh akumulasi gas rumah kaca dari aktivitas manusia, seperti pembakaran bahan bakar fosil, deforestasi, dan industri. Di tengah krisis iklim yang semakin mengancam dunia, EcoNature hadir sebagai komunitas yang peduli terhadap keberlanjutan dan pelestarian lingkungan. 
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">
              EcoNature  mengajak setiap individu berperan aktif dalam upaya memperlambat dampak negatif dari perubahan iklim. Salah satu cara yang paling efektif untuk mewujudkan perubahan tersebut adalah melalui penanaman pohon di daerah kritis, yang juga bertujuan mengubah perilaku masyarakat dalam hal konsumsi dan energi.
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">
              Dengan bergabung dalam gerakan EcoNature, Anda tidak hanya berdonasi untuk menghentikan pemanasan global, tetapi juga menjadi bagian dari perubahan besar yang mengarah pada dunia yang lebih berkelanjutan. Setiap sumbangan, baik besar maupun kecil, memiliki kekuatan untuk menciptakan dampak positif bagi bumi kita, dan bersama-sama, kita dapat membantu menjaga keseimbangan iklim untuk generasi mendatang.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-7 mt-8">
                <div className="flex items-center gap-4">
                <img 
                    src="/images/r1.png" 
                    alt="Author" 
                    className="w-100 h-100 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-2xl font-bold mb-2">Saya Maya Andini</h2>
                    <p className="text-gray-600">
                    Halo! Saya Maya Andini seorang jurnalis lingkungan yang berfokus pada isu perubahan iklim dan pelestarian alam. Berpengalaman dalam mengedukasi publik, serta aktif mendukung aksi keberlanjutan. Mengajak Anda berkontirbusi dalam donasi ini, mari tunjukkan aksi nayata dalam memulihkan bumi.
                    </p>
                </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-8">
                <p className='text-gray-600 font-semibold'>Bagikan:</p>
                <a href="#" className="text-[#3B5998] hover:text-gray-600">
                    <FaFacebook size={24} />
                </a>
                <a href="#" className="text-[#00ACED] hover:text-gray-600">
                    <FaTwitter size={24} />
                </a>
                <a href="#" className="text-[#DC4A38] hover:text-gray-600">
                    <FaGoogle size={24} />
                </a>
                <a href="#" className="text-[#0077B5] hover:text-gray-600">
                    <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-[#D93175] hover:text-gray-600">
                    <FaInstagram size={24} />
                </a>
                <a href="#" className="text-[#FE0002] hover:text-gray-600">
                    <FaYoutube size={24} />
                </a>
                <a href="#" className="text-[#BD081B] hover:text-gray-600">
                    <FaPinterest size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">EcoNature</h3>
              <p className="text-[#555555]">
              Kami adalah EcoNature, komunitas peduli lingkungan. Dalam menghadapi Pemanasan Global, kami butuh dukungan Anda. Mari bersama-sama melindungi planet dan menciptakan masa depan yang berkelanjutan! Setiap tindakan kecil Anda bisa membawa perubahan besar bagi bumi kita.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-6">Ayo Mulai Berdonasi</h3>
                <div className="bg-white border rounded-lg overflow-hidden mb-6">
                    <img 
                    src="/images/dns.png"
                    alt="5R Diagram"
                    className="w-full mb-4"
                    />
                  <h1 className="font-bold mb-4 text-xl ml-4">Ayo Hentikan Pemanasan Global</h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex -space-x-2 ml-4">
                      <div className="w-12 h-12 rounded-full">
                        <img 
                            src="/images/u1.jpg"
                            alt="5R Diagram"
                            className="w-full mb-4"/>
                        </div>
                      <div className="w-12 h-12 rounded-full">
                        <img 
                                src="/images/u2.jpg"
                                alt="5R Diagram"
                                className="w-full mb-4"/>
                      </div>
                      <div className="w-12 h-12 rounded-full">
                        <img 
                                src="/images/u3.jpg"
                                alt="5R Diagram"
                                className="w-full mb-4"/>
                      </div>
                      <div className="w-12 h-12 bg-[#3B9E3F] rounded-full flex items-center justify-center text-white text-sm">+1258</div>
                    </div>
                    <span className="text-sm text-gray-600">1261 Pendukung</span>
                  </div>
                  <div className="w-[363px] bg-gray-200 rounded-full h-2 mb-4 ml-4">
                    <div className="bg-[#3B9E3F] h-2 rounded-full w-2/3"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 grid md:grid-cols-3 font-bold ml-8 mb-4">
                    <div>67% <br /> • Didanai</div>
                    <div className='mr-4'>Rp 900 ribu <br /> • Terkumpul</div>
                    <div className='ml-2'>Rp 2 juta <br /> • Diperlukan</div>
                  </div>
                <button className="w-full bg-[#3B9E3F] text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                  <a href="/Donasi">DONASI SEKARANG</a>
                </button>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Berita Terbaru</h2>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img 
                        src="/images/b4.png" 
                        alt="Plant growing" 
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-xl mb-2">
                          Pemulihan Terumbu Karang di Indonesia
                        </h3>
                        <a href="/Berita" className="text-[#3B9E3F] hover:underline font-bold">BACA SELENGKAPNYA</a>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2 mt-2">
                        <div className="flex items-center gap-1">
                            <i class="bi bi-calendar text-[#689F38]"></i>
                            <span> 29 Juli, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <i class="bi bi-chat-dots text-[#689F38]"></i>
                            <span>134 Komentar</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 mt-6">Menjadi Relawan</h2>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Nama Lengkap" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input 
                      type="email" 
                      placeholder="Alamat Email" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input 
                      type="tel" 
                      placeholder="Nomor Handphone" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-[#3B9E3F] text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      BERGABUNG SEKARANG
                    </button>
                  </form>
                </div>
              </div>
          </div>
        </div>
        <div className="lg:col-span-2 mb-8 mt-8">
                <h2 className="text-2xl font-bold mb-6">Tinggalkan Komentar</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input 
                            type="text" 
                            placeholder="Nama Lengkap" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input 
                            type="text" 
                            placeholder="Subjek" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <textarea 
                        rows="6" 
                        placeholder="Komentar Anda" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    </textarea>
                    <button 
                    type="submit" 
                    className="w-full bg-[#3B9E3F] text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                    KIRIMKAN KOMENTAR ANDA
                    </button>
                </form>
            </div>
      </div>
    </div>
  );
};

export default Donasi1;