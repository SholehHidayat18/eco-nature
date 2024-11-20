import React from 'react';
import { Person, Reply } from 'react-bootstrap-icons';

const Berita3 = () => {
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
                src="/images/y2.png" 
                alt="No Plastic Campaign"
                className="w-full rounded-lg mb-8"
              />
              <h2 className="text-3xl font-bold mb-3">Indonesia Catat Rekor Suhu Tertinggi Akibat Pemanasan Global</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                      <i class="bi bi-person-circle text-[#689F38]"></i>
                      <span>Rakha Putra</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <i class="bi bi-calendar text-[#689F38]"></i>
                      <span>25 Oktober, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                      <i class="bi bi-chat-dots text-[#689F38]"></i>
                      <span>234 Komentar</span>
                  </div>
                  </div>
              <p className="text-gray-600 leading-relaxed mb-2">
              Indonesia baru-baru ini mencatatkan suhu tertinggi yang pernah tercatat dalam sejarah, mencapai angka 38,7°C, yang menunjukkan dampak serius dari pemanasan global. Rekor suhu ini terjadi di beberapa wilayah, termasuk Jawa dan Sumatera, yang dipengaruhi oleh fenomena perubahan iklim global. Menurut para ilmuwan, pemanasan suhu ini berhubungan dengan tingginya emisi gas rumah kaca yang dihasilkan dari aktivitas manusia, seperti deforestasi, pembakaran bahan bakar fosil, dan konversi lahan untuk pertanian.
              </p>
              <p className="text-gray-600 leading-relaxed  mb-2">
              Suhu ekstrem ini telah menyebabkan berbagai dampak buruk bagi masyarakat dan ekosistem, termasuk gangguan pada sektor pertanian, kelangkaan air, dan peningkatan risiko kebakaran hutan. Petani di beberapa daerah mengeluhkan hasil pertanian yang merosot akibat cuaca panas yang berkepanjangan, sementara masyarakat perkotaan juga merasa dampaknya dengan meningkatnya penggunaan energi untuk pendinginan.
              </p>
              <p className="text-gray-600 leading-relaxed  mb-2">
              Pemerintah Indonesia dan organisasi lingkungan menekankan perlunya langkah konkret untuk mengurangi emisi karbon dan melindungi alam. Masyarakat diajak untuk berperan aktif melalui perubahan pola konsumsi, penggunaan energi terbarukan, dan pelestarian hutan. Krisis iklim yang semakin mendesak memerlukan tindakan bersama agar tidak memperburuk kondisi lingkungan dan kehidupan di masa depan. Edukasi perubahan iklim dan kebijakan pengurangan emisi menjadi hal yang tak bisa ditunda.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-center gap-4">
                <img 
                    src="/images/y22.png" 
                    alt="Author" 
                    className="w-100 h-100 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-2xl font-bold mb-2">Tentang Penulis</h2>
                    <p className="text-gray-600">
                    Halo! Saya adalah seorang jurnalis lingkungan yang berfokus pada isu lingkungan. Dengan pengalaman di bidang media, saya aktif mengedukasi publik mengenai pentingnya keberlanjutan dan solusi untuk melawan kerusakan lingkungan.
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
                    <h3 className="font-bold">Pandu Wijaya</h3>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting : 27 Oktober  2024, 13.00</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                        <Reply className="w-4 h-4 mr-1" />
                        <span>Balas</span>
                        </button>
                    </div>
                    </div>
                    <p className="text-gray-600">
                    Suhu ekstrem ini seharusnya jadi alarm bagi kita semua untuk bertindak. Jika kita tidak mengurangi emisi karbon secara signifikan, dampaknya akan lebih buruk lagi bagi kehidupan kita dan generasi mendatang.
                    </p>
                </div>
                </div>

                <div className="ml-16 border-l-2 border-gray-100">
                <div className="flex gap-4 p-4 border-t border-gray-100">
                    <Person className="w-12 h-12 text-gray-400" />
                    <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Kefine Muhammad</h3>
                        <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting: 28 Oktober, 2024 15.37</span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                            <Reply className="w-4 h-4 mr-1" />
                            <span>Balas</span>
                        </button>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    Saya setuju dengan pentingnya perubahan pola konsumsi. Kita harus mulai beralih ke gaya hidup yang lebih ramah lingkungan dan mengurangi ketergantungan pada energi fosil untuk menghindari dampak pemanasan global yang lebih besar.
                    </p>
                    </div>
                </div>

                <div className="flex gap-4 p-4 border-t border-gray-100">
                    <Person className="w-12 h-12 text-gray-400" />
                    <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Gabriel Alexa</h3>
                        <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Diposting: 1 November, 2024, 05.00 </span>
                        <button className="flex items-center text-green-600 hover:text-green-700">
                            <Reply className="w-4 h-4 mr-1" />
                            <span>Balas</span>
                        </button>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    Pemerintah perlu segera memperkuat kebijakan perlindungan lingkungan dan mengurangi deforestasi. Kita sudah terlalu lama membiarkan alam rusak akibat kepentingan ekonomi jangka pendek.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex gap-4 p-4 border-b border-gray-200">
                <Person className="w-12 h-12 text-gray-400" />
                <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Muhammad Geral</h3>
                    <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">Diposting: 5 November, 2024, 10.30 </span>
                    <button className="flex items-center text-green-600 hover:text-green-700">
                        <Reply className="w-4 h-4 mr-1" />
                        <span>Balas</span>
                    </button>
                    </div>
                </div>
                <p className="text-gray-600">
                Masyarakat memang harus lebih aktif dalam mengedukasi diri sendiri tentang krisis iklim. Edukasi dan kesadaran publik akan pentingnya pelestarian lingkungan adalah kunci untuk menghadapi perubahan iklim.
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

export default Berita3;