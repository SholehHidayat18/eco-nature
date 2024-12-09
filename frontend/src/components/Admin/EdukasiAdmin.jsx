import React, { useEffect, useState } from 'react';
import { FaBell, FaBookOpen, FaUser } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';
import EducationService from '../../service/EducationService';
import Swal from 'sweetalert2';

const EdukasiAdmin = () => {
  const [educationData, setEducationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quotes: '',
    image_path: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        setIsLoading(true);
        const educations = await EducationService.getEducations();
        setEducationData(educations);
      } catch (err) {
        setError('Gagal memuat data edukasi.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducations();
  }, []);

  const handleSearch = () => {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach((row) => {
      const materiTitle = row.cells[1].textContent.toLowerCase();
      if (materiTitle.includes(searchValue)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Materi ini akan dihapus secara permanen!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      try {
        const response = await EducationService.deleteEducation(id);
        if (response) {
          const educations = await EducationService.getEducations();
          setEducationData(educations);
          await Swal.fire(
            'Berhasil!',
            'Materi berhasil dihapus.',
            'success'
          );
        }
      } catch (err) {
        await Swal.fire(
          'Gagal!',
          'Terjadi kesalahan saat menghapus materi.',
          'error'
        );
      }
    }
  };

  const handleModalOpen = (education = null) => {
    if (education) {
      setFormData({
        title: education.title,
        description: education.description,
        quotes: education.quotes,
        image_path: education.image_path,
      });
      setEditMode(true);
      setCurrentEditId(education.id);
    } else {
      setFormData({
        title: '',
        description: '',
        quotes: '',
        image_path: null,
      });
      setEditMode(false);
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditMode(false);
    setCurrentEditId(null);
  };

  // Fungsi untuk menangani perubahan pada input gambar
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image_path: e.target.files[0], // menyimpan file gambar yang dipilih
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formToSubmit = new FormData();
    formToSubmit.append('title', formData.title);
    formToSubmit.append('description', formData.description);
    formToSubmit.append('quotes', formData.quotes);

    if (formData.image_path) {
      formToSubmit.append('image_path', formData.image_path);
    }

    try {
      if (editMode) {
        // Edit existing education
        await EducationService.updateEducation(currentEditId, formToSubmit);
        Swal.fire('Berhasil!', 'Materi berhasil diperbarui.', 'success');
      } else {
        // Add new education
        await EducationService.createEducation(formToSubmit);
        Swal.fire('Berhasil!', 'Materi berhasil ditambahkan.', 'success');
      }
      // Fetch updated data
      const educations = await EducationService.getEducations();
      setEducationData(educations);
      handleModalClose();
    } catch (err) {
      Swal.fire('Gagal!', 'Terjadi kesalahan saat menyimpan materi.', 'error');
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-[#3B9E3F] text-white p-6 mt-14">
        <NavbarAdmin />
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 px-6 py-4 flex justify-between items-center">
          <a href="/admin/Dashboard" className="font-bold text-2xl text-[#3B9E3F]">
            EcoNature Admin
          </a>
          <div className="flex items-center gap-4">
            <button className="text-[#3B9E3F] hover:text-gray-700">
              <FaBell className="text-2xl" />
            </button>
            <a href="/admin/ProfileAdmin" className="text-[#3B9E3F] hover:text-gray-700">
              <FaUser className="text-2xl" />
            </a>
          </div>
        </nav>

        <div className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow mb-6 mt-16">
          <div className="flex items-center">
            <FaBookOpen className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-semibold mb-2">Edukasi</h1>
              <p className="text-lg">Kelola materi edukasi dan pastikan pengetahuan pengguna terus berkembang.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <input
            type="text"
            id="search"
            placeholder="Cari materi edukasi..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSearch}
            className="ml-4 px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500"
          >
            Cari
          </button>
        </div>

        <div className="mb-6">
          <button
            onClick={() => handleModalOpen()}
            className="px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500 inline-flex items-center"
          >
            Tambah Materi
          </button>
        </div>

        {/* Edukasi Summary */}
        <div className="flex mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center w-1/3 mr-4">
            <div>
              <h5 className="text-xl font-semibold">Total Materi</h5>
              <p className="text-[#3B9E3F]">{educationData.length} Materi</p>
            </div>
            <i className="fas fa-book text-4xl text-green-600 ml-4"></i>
          </div>
        </div>

        {isLoading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
            <table className="w-full border-collapse">
              <thead className="bg-[#3B9E3F] text-white">
                <tr>
                  <th className="px-4 py-2 border">No</th>
                  <th className="px-4 py-2 border">Judul Materi</th>
                  <th className="px-4 py-2 border">Tanggal Ditambahkan</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {educationData.map((education, index) => (
                  <tr key={education.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                    <td className="px-4 py-2 border">{education.title}</td>
                    <td className="px-4 py-2 border text-center">{education.formattedCreatedAt}</td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() => handleModalOpen(education)}
                        className="px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-yellow-400 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(education.id)}
                        className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-400"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-2xl font-semibold mb-4">{editMode ? 'Edit Materi' : 'Tambah Materi'}</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Judul Materi</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Deskripsi</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Quotes</label>
                  <input
                    type="text"
                    value={formData.quotes}
                    onChange={(e) => setFormData({ ...formData, quotes: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Upload Gambar</label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-6 flex justify-end items-center space-x-3">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500"
                  >
                    {editMode ? 'Update' : 'Tambah'}
                  </button>
                  <button
                    onClick={handleModalClose}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg "
                  >
                    Tutup
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EdukasiAdmin;
