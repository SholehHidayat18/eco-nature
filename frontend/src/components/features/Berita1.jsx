import React from 'react';
import { Person, Reply } from 'react-bootstrap-icons';

const Berita1 = () => {
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
                src="/images/berita1.png" 
                alt="No Plastic Campaign"
                className="w-full rounded-lg mb-8"
              />
              <h2 className="text-3xl font-bold mb-3">Indonesia Jadi Negara Penyumbang Sampah Plastik Terbanyak Ketiga di Dunia</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                      <i class="bi bi-person-circle text-[#689F38]"></i>
                      <span>Asnida Riani</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <i class="bi bi-calendar text-[#689F38]"></i>
                      <span>11 September, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <i class="bi bi-chat-dots text-[#689F38]"></i>
                      <span>194 Komentar</span>
                  </div>
                  </div>
              <p className="text-gray-600 leading-relaxed mb-2">
                Sebuah studi baru dari University of Leeds, Inggris, mengungkap bahwa Indonesia merupakan negara 
                penyumbang sampah plastik terbanyak ketiga di dunia, dengan total 3,4 juta ton plastik pada tahun 
                2020. Penelitian ini menggunakan AI untuk memodelkan pengelolaan sampah di lebih dari 50 ribu kotamadya 
                di seluruh dunia. Secara global, 52 juta ton produk plastik mencemari lingkungan, dengan lebih dari dua 
                pertiga berasal dari sampah yang tidak diangkut
              </p>
              <p className="text-gray-600 leading-relaxed  mb-2">
                Hampir 1,2 miliar orang hidup tanpa akses ke layanan pengangkutan sampah, dan sekitar 30 juta ton 
                plastik dibakar tanpa kontrol lingkungan, yang berpotensi mengancam kesehatan manusia. India tercatat 
                sebagai penyumbang polusi plastik terbesar, diikuti Nigeria dan Indonesia. Selain itu, studi ini 
                menunjukkan adanya perbedaan signifikan dalam emisi limbah plastik antara belahan Bumi Utara dan Selatan, 
                di mana negara-negara berpenghasilan rendah dan menengah sering mengalami pengelolaan limbah yang buruk.
              </p>
              <p className="text-gray-600 leading-relaxed  mb-2">
                Para peneliti menyerukan perhatian lebih terhadap masalah pembakaran terbuka dan pengelolaan sampah 
                yang tidak memadai, serta menekankan pentingnya akses layanan pengumpulan sampah sebagai kebutuhan dasar. 
                Mereka berharap penelitian ini dapat membantu pembuat kebijakan dalam merumuskan rencana pengelolaan limbah 
                dan ekonomi sirkular yang lebih efektif, serta mendorong terciptanya 'Perjanjian Plastik' global yang mengikat secara hukum.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-center gap-4">
                <img 
                    src="/images/user.jpg" 
                    alt="Author" 
                    className="w-100 h-100 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-2xl font-bold mb-2">Tentang Penulis</h2>
                    <p className="text-gray-600">
                    Halo! Saya adalah seorang jurnalis dan editor dengan pengalaman 9 tahun di media online nasional. 
                    Saya mampu menghasilkan artikel yang ramah SEO dari berbagai bidang seperti isu sosial, 
                    kecantikan, fashion, makanan, perjalanan, dan budaya.
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
                    <h3 className="font-bold">Agus Sutrisno</h3>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting : 19 September 2024, 11.00</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                        <Reply className="w-4 h-4 mr-1" />
                        <span>Balas</span>
                        </button>
                    </div>
                    </div>
                    <p className="text-gray-600">
                    Ini jadi pengingat buat kita semua untuk lebih bijak dalam penggunaan plastik. 
                    Masyarakat perlu mulai dari diri sendiri, seperti mengurangi penggunaan plastik 
                    sekali pakai dan memilah sampah di rumah.
                    </p>
                </div>
                </div>

                <div className="ml-16 border-l-2 border-gray-100">
                <div className="flex gap-4 p-4 border-t border-gray-100">
                    <Person className="w-12 h-12 text-gray-400" />
                    <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Cindy Clarissa Nugraha</h3>
                        <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting: 19 September, 2024 14.37</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                            <Reply className="w-4 h-4 mr-1" />
                            <span>Balas</span>
                        </button>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Pemerintah harus lebih serius dalam menyediakan infrastruktur pengelolaan sampah, 
                        terutama di daerah yang belum terjangkau layanan pengangkutan. Kebijakan seperti 
                        pelarangan kantong plastik sekali pakai bisa jadi langkah awal.
                    </p>
                    </div>
                </div>

                <div className="flex gap-4 p-4 border-t border-gray-100">
                    <Person className="w-12 h-12 text-gray-400" />
                    <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Muhammad Arifin Setiawan</h3>
                        <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting: 20 September, 2024 02.37</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                            <Reply className="w-4 h-4 mr-1" />
                            <span>Balas</span>
                        </button>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        Penting bagi kita untuk meningkatkan edukasi tentang dampak sampah plastik, 
                        terutama di sekolah dan komunitas. Anak-anak perlu tahu bahwa sampah plastik 
                        yang dibuang sembarangan bisa mencemari sungai dan laut.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex gap-4 p-4 border-b border-gray-200">
                <Person className="w-12 h-12 text-gray-400" />
                <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Harapan Siregar</h3>
                    <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">Diposting: 20 September, 2024 08.30</span>
                    <button className="flex items-center text-green-600 hover:text-green-700">
                        <Reply className="w-4 h-4 mr-1" />
                        <span>Balas</span>
                    </button>
                    </div>
                </div>
                <p className="text-gray-600">
                    Berita ini mengkhawatirkan karena sampah plastik yang dibakar sembarangan bisa 
                    mengancam kesehatan kita semua, mulai dari polusi udara hingga masalah pernapasan. 
                    Kita perlu solusi yang cepat
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
                      <div className="w-12 h-12 bg-[#66BB6A] rounded-full flex items-center justify-center text-white text-sm">+1258</div>
                    </div>
                    <span className="text-sm text-gray-600">1261 Pendukung</span>
                  </div>
                  <div className="w-[363px] bg-gray-200 rounded-full h-2 mb-4 ml-4">
                    <div className="bg-[#66BB6A] h-2 rounded-full w-2/3"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 grid md:grid-cols-3 font-bold ml-8 mb-4">
                    <div>67% <br /> • Didanai</div>
                    <div className='mr-4'>Rp 900 ribu <br /> • Terkumpul</div>
                    <div className='ml-2'>Rp 2 juta <br /> • Diperlukan</div>
                  </div>
                <button className="w-full bg-[#66BB6A] text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
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
                        <a href="/Berita" className="text-[#66BB6A] hover:underline font-bold">BACA SELENGKAPNYA</a>
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
                      className="w-full bg-[#66BB6A] text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
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
                    className="w-full bg-[#66BB6A] text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                    KIRIMKAN KOMENTAR ANDA
                    </button>
                </form>
            </div>
      </div>
    </div>
  );
};

export default Berita1;