import React from 'react';
import { Person, Reply } from 'react-bootstrap-icons';

const Berita6 = () => {
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
              Beranda &raquo; Fitur &raquo; Informasi & Berita &raquo; Lebih Lanjut
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 max-w-7xl px-4 mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8">
              <img 
                src="/images/y5.png" 
                alt="No Plastic Campaign"
                className="w-full rounded-lg mb-8"
              />
              <h2 className="text-3xl font-bold mb-3">Gerakan Menanam 1 Juta Pohon Pohon Untuk Masa Depan Hijau</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                      <i class="bi bi-person-circle text-[#689F38]"></i>
                      <span>Muhammad</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <i class="bi bi-calendar text-[#689F38]"></i>
                      <span>25 September, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <i class="bi bi-chat-dots text-[#689F38]"></i>
                      <span>334 Komentar</span>
                  </div>
                  </div>
              <p className="text-gray-600 leading-relaxed mb-2">
              Gerakan Menanam 1 Juta Pohon terus mendapatkan dukungan luas dari masyarakat Indonesia. Inisiatif ini bertujuan untuk mengurangi dampak perubahan iklim dan memperbaiki kualitas udara dengan menanam pohon di berbagai daerah, baik perkotaan maupun pedesaan. Dengan target satu juta pohon, gerakan ini tidak hanya berfokus pada penghijauan, tetapi juga bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya menjaga kelestarian lingkungan.
              </p>
              <p className="text-gray-600 leading-relaxed  mb-2">
              Para relawan dari berbagai latar belakang turut berpartisipasi dalam menanam pohon di lahan-lahan yang telah ditentukan. Melalui kolaborasi antara pemerintah, organisasi lingkungan, dan masyarakat, program ini diharapkan dapat memberikan dampak yang signifikan dalam mengurangi polusi udara dan mengembalikan fungsi ekosistem yang hilang akibat deforestasi. Selain itu, kegiatan ini juga diharapkan dapat mendorong lebih banyak orang untuk aktif dalam upaya konservasi alam.
              </p>
              <p className="text-gray-600 leading-relaxed  mb-2">
              Gerakan ini semakin mendekatkan masyarakat pada kesadaran bahwa menjaga bumi bukanlah tugas yang bisa diserahkan kepada segelintir orang. Dengan menanam pohon, setiap individu berkontribusi langsung dalam mewujudkan masa depan yang lebih hijau dan berkelanjutan. Partisipasi masyarakat dalam aksi penghijauan ini memberikan harapan bahwa bumi bisa tetap lestari untuk generasi yang akan datang.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-center gap-4">
                <img 
                    src="/images/y55.png" 
                    alt="Author" 
                    className="w-100 h-100 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-2xl font-bold mb-2">Tentang Penulis</h2>
                    <p className="text-gray-600">
                    Halo! Saya adalah seorang adalah jurnalis yang fokus pada isu-isu lingkungan dan keberlanjutan. Dengan pengalaman di bidang ini, saya berkomitmen untuk mengedukasi publik tentang pentingnya pelestarian alam dan peran aktif masyarakat dalam menjaga lingkungan
                    </p>
                </div>
                </div>
            </div>
            
            <div className="space-y-0">
              <h2 className="text-2xl font-bold mb-2">Komentar pada Postingan</h2>
            <div className="border-b border-gray-200">
                <div className="flex gap-4 p-4">
                <Person className="w-12 h-12 text-gray-400" />
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Chelsea Nova</h3>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting : 26 September 2024, 14.00</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                        <Reply className="w-4 h-4 mr-1" />
                        <span>Balas</span>
                        </button>
                    </div>
                    </div>
                    <p className="text-gray-600">
                    Gerakan ini sangat positif, namun penting untuk memastikan pohon yang ditanam dapat bertahan dan berkembang.
                    </p>
                </div>
                </div>

                <div className="ml-16 border-l-2 border-gray-100">
                <div className="flex gap-4 p-4 border-t border-gray-100">
                    <Person className="w-12 h-12 text-gray-400" />
                    <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Permata Ayunda</h3>
                        <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting: 28 September, 2024 17.27</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                            <Reply className="w-4 h-4 mr-1" />
                            <span>Balas</span>
                        </button>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    Menanam pohon adalah langkah yang baik, namun harus ada dukungan berkelanjutan agar hasilnya maksimal.
                    </p>
                    </div>
                </div>

                <div className="flex gap-4 p-4 border-t border-gray-100">
                    <Person className="w-12 h-12 text-gray-400" />
                    <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Zaza Chantika</h3>
                        <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting: 1 November, 2024 21.28 </span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                            <Reply className="w-4 h-4 mr-1" />
                            <span>Balas</span>
                        </button>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    Aksi menanam pohon ini harus didukung dengan edukasi tentang cara merawat pohon agar lebih efektif dalam jangka panjang.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex gap-4 p-4 border-b border-gray-200">
                <Person className="w-12 h-12 text-gray-400" />
                <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Kadafi Muhammad</h3>
                    <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">Diposting: 1 November, 2024 23.30 </span>
                    <button className="flex items-center text-green-600 hover:text-green-700">
                        <Reply className="w-4 h-4 mr-1" />
                        <span>Balas</span>
                    </button>
                    </div>
                </div>
                <p className="text-gray-600">
                Semoga gerakan ini terus berkembang dan menginspirasi lebih banyak orang untuk terlibat dalam pelestarian lingkungan.
                </p>
                </div>
            </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">EcoNature</h3>
              <p className="text-[#555555]">
                Kami adalah EcoNature, komunitas peduli lingkungan. Dalam menghadapi Pemanasan Global, kami butuh dukungan Anda. Mari bersama-sama melindungi planet dan menciptakan masa depan yang berkelanjutan!
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

        <div className="lg:col-span-2 mb-8 mt-6">
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

export default Berita6;