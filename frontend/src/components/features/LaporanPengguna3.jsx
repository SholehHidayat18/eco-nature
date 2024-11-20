import React from 'react';

const LaporanPengguna3 = () => {
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
                      Beranda Fitur &raquo; Daftar Laporan Pengaduan &raquo; Lebih Lanjut
                  </nav>
              </div>
          </div>
      </div>

      <div className="container mx-auto py-12 max-w-7xl px-4 mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8 relative">
              <img 
                src="/images/sampah.jpg" 
                alt="Waste Report"
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-2 left-2 text-white text-sm flex items-center gap-2">
                <i className="bi bi-person-circle text-[#689F38] ml-4"></i>
                <span>Bambang Asep</span>
                <i className="bi bi-calendar text-[#689F38] ml-2"></i>
                <span>20 Maret, 2024</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-6">
              Sampah yang Menumpuk di Pembuangan Sampah
            </h1>

            <div className="space-y-4 mb-6">
              <div className="border rounded p-3">
                <div className="flex items-center">
                  <span className="text-gray-700">Status Laporan :</span>
                  <div className="ml-2 bg-[#1B5E20] text-white px-4 py-1 rounded">
                    SELESAI
                  </div>
                </div>
              </div>

              <div className="border rounded p-3">
                <div className="flex items-center">
                  <i className="bi bi-person-circle text-gray-600 mr-2"></i>
                  <span className="text-gray-700">Nama Lengkap : Bambang Asep</span>
                </div>
              </div>

              <div className="border rounded p-3">
                <div className="flex items-center">
                  <i className="bi bi-envelope text-gray-600 mr-2"></i>
                  <span className="text-gray-700">Alamat Email : bambang123@gmail.com</span>
                </div>
              </div>

              <div className="border rounded p-3">
                <div className="flex items-center">
                  <i className="bi bi-phone text-gray-600 mr-2"></i>
                  <span className="text-gray-700">Nomor Handphone : +62 81230 9870</span>
                </div>
              </div>

              <div className="border rounded p-3">
                <div className="flex items-center">
                  <i className="bi bi-calendar text-gray-600 mr-2"></i>
                  <span className="text-gray-700">Tanggal dan Hari : Rabu, 20/03/2024</span>
                </div>
              </div>

              <div className="border rounded p-3">
                <div className="flex items-center">
                  <i className="bi bi-trash text-gray-600 mr-2"></i>
                  <span className="text-gray-700">Jenis Sampah : Campuran (Anorganik dan Organik)</span>
                </div>
              </div>

              <div className="border rounded p-3">
                <div className="flex items-center">
                  <i className="bi bi-geo-alt text-gray-600 mr-2"></i>
                  <span className="text-gray-700">Alamat Lengkap : Tempat Pembuangan Sampah Sementara, Desa Maju, Tegal, Jawa Tengah.</span>
                </div>
              </div>

              <div className="border rounded p-4 bg-gray-50">
                <p className="text-gray-700 leading-relaxed">
                  Terdapat tumpukan sampah yang menumpuk di area pembuangan sampah sementara. 
                  Sampah sudah menggunung dan mencemari lingkungan sekitar. Bau menyengat dan 
                  kotoran terlihat menyebar di sekitar lokasi, sehingga mengganggu kenyamanan 
                  warga setempat. Kami berharap pihak terkait dapat segera mengangkut sampah 
                  dan membersihkan area tersebut untuk mencegah dampak kesehatan dan lingkungan 
                  yang lebih parah bagi warga sekitar.
                </p>
              </div>
            </div>

            <div className=" mx-auto bg-white">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Foto Kondisi Sampah :</h2>
                <div className="grid grid-cols-2">
                  <div className="relative ml-48">
                    <img
                      src="/images/smph1.png"
                      alt="Kondisi Sampah 1"
                      className="w-[226px] h-[301px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="relative ml-4">
                    <img
                      src="/images/smph2.png"
                      alt="Kondisi Sampah 2"
                      className="w-[226px] h-[301px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <button className="bg-[#66BB6A] hover:bg-green-600 text-white px-6 py-2 rounded-md transition duration-300 uppercase text-sm font-semibold">
                  Kembali Kedaftar Laporan Pengaduan
                </button>
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
        <div className="lg:col-span-2 mb-8">
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

export default LaporanPengguna3;