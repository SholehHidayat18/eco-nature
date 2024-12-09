import React, { useState, useEffect, useRef } from 'react';
import ProfileService from '../service/profileService';
import { Link } from 'react-router-dom';

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    name: '',
    jenis_kelamin: '',
    tanggal_lahir: '',
    pekerjaan: '',
    email: '',
    no_handphone: '',
    alamat: '',
    image_path: null,
    fotoPreview: null,
  });

  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch profile data on component mount
    const fetchProfile = async () => {
      try {
        const profile = await ProfileService.getProfile();
        setFormData({
          name: profile.name || '',
          jenis_kelamin: profile.jenis_kelamin || '',
          tanggal_lahir: profile.tanggal_lahir || '',
          pekerjaan: profile.pekerjaan || '',
          email: profile.email || '',
          no_handphone: profile.no_handphone || '',
          alamat: profile.alamat || '',
          image_path: profile.image_path || null,
          fotoPreview: profile.image_path ? `/images/profile/${profile.image_path}` : null,
        });
      } catch (error) {
        console.error('Gagal memuat profil:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image_path: file,
        fotoPreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        updateData.append(key, formData[key]);
      }
    }

    try {
      setLoading(true);
      await ProfileService.updateProfile(updateData);
      alert('Profil berhasil diperbarui');
    } catch (error) {
      console.error('Gagal memperbarui profil:', error);
      alert('Gagal memperbarui profil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white w-full pt-[100px] flex justify-center items-center">
      <div className=" w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-4 text-left">Edit Profil</h1>
        <form onSubmit={handleSubmit} className=" mx-auto  w-full ">
          <div className="mb-4 flex justify-between p-6 items-center bg-gray-50 rounded-lg shadow-md">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
              {formData.fotoPreview ? (
                <img src={formData.fotoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-200">Foto</div>
              )}
            </div>
            <button
              type="button"
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleFileInputClick}
            >
              Ubah Foto
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              accept="image/jpeg, image/png"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
            <select
              name="jenis_kelamin"
              value={formData.jenis_kelamin}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Pilih</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
            <input
              type="date"
              name="tanggal_lahir"
              value={formData.tanggal_lahir}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Pekerjaan</label>
            <input
              type="text"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nomor Handphone</label>
            <input
              type="tel"
              name="no_handphone"
              value={formData.no_handphone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Alamat</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className='flex justify-center items-center mb-6 space-x-16 px-16 '>
            <Link
              to='/Profile'
              className='w-full text-center bg-green-500 text-white py-2 px-4 rounded'
            >
              Kembali
            </Link>
            <button
              type="submit"
              className={`w-full bg-green-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={loading}
            >
              {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
