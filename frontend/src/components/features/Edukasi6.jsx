import React from 'react';

const Edukasi6 = () => {
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
              Beranda &raquo; Fitur &raquo; Edukasi &raquo; Lebih Lanjut
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 max-w-7xl px-4 mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8">
              <img 
                src="/images/d6.png" 
                alt="No Plastic Campaign"
                className="w-full rounded-lg mb-8"
              />
              <h2 className="text-3xl font-bold mb-3">Dasar-Dasar Lingkungan Hidup</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
              Lingkungan hidup adalah segala sesuatu yang ada di sekitar kita, termasuk udara, air, tanah, tumbuhan, hewan, dan segala bentuk kehidupan lainnya. Setiap elemen dalam lingkungan saling berinteraksi, membentuk ekosistem yang mendukung kehidupan di Bumi. Misalnya, pohon menyerap karbon dioksida dan menghasilkan oksigen, yang kita butuhkan untuk bernapas. Tanpa keseimbangan ini, kehidupan manusia, hewan, dan tumbuhan akan terancam. Itulah mengapa penting untuk memahami dan menjaga lingkungan kita, agar semua makhluk hidup bisa berkembang dan bertahan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">
              Namun, aktivitas manusia sering kali merusak lingkungan. Deforestasi, polusi udara dan air, serta pembuangan sampah yang sembarangan adalah beberapa contoh dampak buruk yang ditimbulkan oleh ketidakseimbangan kita dengan alam. Plastik yang kita gunakan sehari-hari, misalnya, dapat mencemari laut dan membahayakan kehidupan laut. Selain itu, emisi gas rumah kaca dari kendaraan dan industri semakin memperburuk perubahan iklim, yang membawa dampak serius bagi ekosistem dan manusia itu sendiri, seperti bencana alam yang lebih sering terjadi dan krisis air bersih.
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">
              Untuk menjaga lingkungan hidup, kita harus mulai dengan langkah-langkah sederhana. Mengurangi penggunaan plastik sekali pakai, mendaur ulang sampah, serta menggunakan sumber daya alam secara bijak adalah beberapa contoh tindakan yang bisa kita lakukan. Selain itu, melestarikan hutan dan merawat keberagaman hayati juga sangat penting untuk menjaga keseimbangan alam. Setiap tindakan kecil kita, jika dilakukan bersama-sama, dapat memberikan dampak besar dalam menciptakan dunia yang lebih hijau, sehat, dan berkelanjutan bagi semua makhluk hidup.
              </p>
            </div>

              <div className="bg-gray-50 p-6 rounded-lg flex items-center ml-48 w-[427px] h-[#132px] mb-6">
                <blockquote className="italic text-[#555555]">
                "Jaga Alam, Jaga Kehidupan – Langkah Kecil, Dampak Besar!"
                </blockquote>
              </div>

            <div container mx-auto px-4 py-8>
                <h1 className="text-2xl font-bold mb-4">Galeri</h1>
                <div className="grid md:grid-cols-4 gap-4">
                    <img 
                        src="/images/f6.png" 
                        alt="Volunteers cleaning" 
                        className="rounded-lg w-[206px] h-[153px] object-cover"
                        />
                    <img 
                        src="/images/f66.png" 
                        alt="Plastic waste" 
                        className="rounded-lg w-[206px] h-[153px] object-cover"
                        />
                    <img 
                        src="/images/f666.png" 
                        alt="Green produce" 
                        className="rounded-lg w-[206px] h-[153px] object-cover"
                        />
                    <img 
                        src="/images/f6666.png" 
                        alt="Recycled basket" 
                        className="rounded-lg w-[206px] h-[153px] object-cover"
                        />
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

export default Edukasi6;