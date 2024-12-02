import React, { useState, useRef } from 'react';

const ProfileEdit = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    foto: null,
    fotoPreview: null,
  });

  const [profileData, setProfileData] = useState({
    namaLengkap: '',
    jenisKelamin: '',
    tanggalLahir: '',
    pekerjaan: '',
    email: '',
    nomorHandphone: '',
    alamat: '',
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      'namaLengkap',
      'jenisKelamin',
      'tanggalLahir',
      'pekerjaan',
      'email',
      'nomorHandphone',
      'alamat',
    ];

    const isValid = requiredFields.every(
      (field) => profileData[field] && profileData[field].trim() !== ''
    );

    if (!isValid) {
      alert('Harap isi semua field yang diperlukan');
      return;
    }

    const completeProfileData = {
      ...profileData,
      foto: formData.foto,
      fotoPreview: formData.fotoPreview,
    };

    console.log('Data Profil yang Akan Disimpan:', completeProfileData);

    alert('Profil berhasil dipersiapkan untuk disimpan!');
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({
      foto: null,
      fotoPreview: null,
    });
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        foto: file,
        fotoPreview: URL.createObjectURL(file),
      });
    }
  };

  const handleDeletePhoto = () => {
    setFormData({
      foto: null,
      fotoPreview: null,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96 overflow-hidden mb-10">
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
              Beranda &raquo; Ubah Profil
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 mb-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Profil</h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg shadow-md max-w-6xl mx-auto p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                  <img
                    src="/images/us.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#3B9E3F]">RORONOA ZORO</h2>
                  <p className="text-gray-500">ID 823409185</p>
                </div>
              </div>
              <button
                className="bg-[#3B9E3F] w-[300px] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                onClick={handleOpenPopup}
              >
                <i className="bi bi-pencil-fill mr-2"></i>
                <span>UBAH FOTO</span>
              </button>
            </div>
          </div>
          <div className="max-w-6xl mx-auto p-6">
            <div className="flex items-center mb-4">
              <i className="bi bi-person-fill text-gray-500 mr-2"></i>
              <span className="text-gray-700">Nama Lengkap</span>
            </div>
            <input
              type="text"
              name="namaLengkap"
              value={profileData.namaLengkap}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex items-center mb-4 mt-4">
              <i className="bi bi-gender-ambiguous text-gray-500 mr-2"></i>
              <span className="text-gray-700">Jenis Kelamin</span>
            </div>
            <input
              type="text"
              name="jenisKelamin"
              value={profileData.jenisKelamin}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        <div className="flex items-center mb-4 mt-4">
          <i className="bi bi-calendar-date text-gray-500 mr-2"></i>
          <span className="text-gray-700">Tanggal Lahir</span>
        </div>
            <input
                type="date"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
                value={formData.tanggal}
            />
            <div className="flex items-center mb-4 mt-4">
                    <i className="bi bi-briefcase text-gray-500 mr-2"></i>
                    <span className="text-gray-700">Pekerjaan</span>
                </div>
                <input 
                    type="text" 
                    name="pekerjaan"
                    value={profileData.pekerjaan}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
                <div className="flex items-center mb-4 mt-4">
                    <i className="bi bi-envelope text-gray-500 mr-2"></i>
                    <span className="text-gray-700">Email</span>
                </div>
                <input 
                    type="email" 
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
                <div className="flex items-center mb-4 mt-4">
                    <i className="bi bi-phone text-gray-500 mr-2"></i>
                    <span className="text-gray-700">Nomor Handphone</span>
                </div>
                <input 
                    type="tel" 
                    name="nomorHandphone"
                    value={profileData.nomorHandphone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
                <div className="flex items-center mb-4 mt-4">
                    <i className="bi bi-map text-gray-500 mr-2"></i>
                    <span className="text-gray-700">Alamat</span>
                </div>
                <textarea
                    name="alamat"
                    value={profileData.alamat}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-24"
                    rows={4}
                ></textarea>
          </div>
          <div className="max-w-4xl mx-auto p-6 flex justify-between">
            <button
              type="button"
              className="bg-[#3B9E3F] w-[300px] text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
            >
              <a href="/">KEMBALI KE BERANDA</a>
            </button>
            <button
              type="submit"
              className="bg-[#3B9E3F] w-[300px] text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
            >
              SIMPAN PERUBAHAN
            </button>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white justify-center rounded-lg shadow-md p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Ubah Foto Profil</h2>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex items-center mb-4">
              <button
                className="bg-white text-[#33691E] px-6 py-2 w-[442px] shadow-md rounded-lg text-xl font-semibold hover:bg-green-400 transition-colors"
                onClick={handleFileInputClick}
              >
                Unggah Foto
              </button>
            </div>
            <div className="flex items-center mb-4">
              <button
                className="bg-white text-[#9A0606] px-4 py-2 w-[442px] shadow-md rounded-lg text-xl font-semibold hover:bg-red-400 transition-colors"
                onClick={handleDeletePhoto}
              >
                Hapus Foto Saat Ini
              </button>
            </div>
            <div className="flex items-center mb-4">
              <button
                className="bg-white text-[#000000] px-4 py-2 w-[442px] shadow-md rounded-lg text-xl font-semibold hover:bg-gray-400 transition-colors"
                onClick={handleClosePopup}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileEdit;