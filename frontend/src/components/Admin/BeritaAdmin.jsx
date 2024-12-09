import React, { useEffect, useState } from 'react';
import { FaBell, FaUser, FaNewspaper } from 'react-icons/fa';
import NavbarAdmin from '../NavbarAdmin';
import NewsService from "../../service/NewsService";
import Swal from 'sweetalert2';

const BeritaAdmin = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk kontrol modal
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    username: '',
    message: '',
    image_path: null,
    avatar: null,
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await NewsService.getNewses();
        setNewsData(response); // Update state dengan data dari API
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat memuat data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const searchBerita = () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const judulName = row.cells[1].textContent.toLowerCase();
      if (judulName.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change for image and avatar
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleCreateNews = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('username', formData.username);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('image_path', formData.image_path);
    formDataToSend.append('avatar', formData.avatar);

    try {
      const createData = await NewsService.createNews(formDataToSend)

      if (createData) {
        const response = await NewsService.getNewses();
        setNewsData(response); // Add the new news to the state
        setIsModalOpen(false); // Close the modal
      } else {
        setError('Failed to create news');
      }
    } catch (error) {
      setError(error.message || "Failed to create news");
    }
  };

  const handleEditNews = async (newsId) => {
    try {
      const news = await NewsService.getNewsById(newsId);
      setFormData({
        id: news.id,
        title: news.title,
        description: news.description,
        username: news.username,
        message: news.message,
        image_path: news.imagePath,
        avatar: news.avatar,
      });
      setIsEditMode(true); // Set modal ke mode edit
      setIsModalOpen(true); // Buka modal
    } catch (error) {
      setError(error.message || "Failed to fetch news details");
    }
  };

  const handleDeleteNews = async (newsId) => {
    try {
      // Tampilkan SweetAlert konfirmasi penghapusan
      const result = await Swal.fire({
        title: 'Apakah Anda yakin?',
        text: 'Berita ini akan dihapus secara permanen!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal',
      });

      if (result.isConfirmed) {
        // Lakukan penghapusan berita
        const news = await NewsService.deleteNews(newsId);
        if (news) {
          // Berita berhasil dihapus, reload data berita
          const response = await NewsService.getNewses();
          setNewsData(response);

          // Tampilkan SweetAlert pemberitahuan sukses
          Swal.fire('Terhapus!', 'Berita telah berhasil dihapus.', 'success');
        }
      }
    } catch (error) {
      setError(error.message || "Failed to fetch news details");
      // Tampilkan SweetAlert pemberitahuan error jika terjadi kesalahan
      Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus berita.', 'error');
    }
  };

  const handleUpdateNews = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('username', formData.username);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('image_path', formData.image_path);
    formDataToSend.append('avatar', formData.avatar);

    try {
      const updatedNews = await NewsService.updateNews(formData.id, formDataToSend);
      setNewsData(newsData.map((news) => news.id === updatedNews.id ? updatedNews : news)); // Update berita yang diubah
      setIsModalOpen(false); // Tutup modal setelah update
      setIsEditMode(false); // Kembali ke mode tambah
    } catch (error) {
      setError(error.message || "Failed to update news");
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

        <header className="bg-[#3B9E3F] text-white p-6 rounded-lg shadow mb-6 mt-16">
          <div className="flex items-center">
            <FaNewspaper className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Berita</h1>
              <p className="text-lg">Kelola berita dan pastikan informasi terbaru tersampaikan dengan baik.</p>
            </div>
          </div>
        </header>

        <div className="flex items-center mb-6">
          <input
            type="text"
            id="search"
            placeholder="Cari berita..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={searchBerita}
            className="ml-4 px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500"
          >
            Cari
          </button>
        </div>

        <div className="mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-[#3B9E3F] text-white rounded-lg hover:bg-green-500 inline-flex items-center"
          >
            <i className="fas fa-plus-circle mr-2"></i> Tambah Berita
          </button>
        </div>

        {/* Modal untuk Menambahkan Berita */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
              <h2 className="text-2xl font-bold mb-4">{isEditMode ? "Edit Berita" : "Tambah Berita"}</h2>

              <form className='grid grid-cols-2 gap-4'>
                {/* Form fields */}
                <div className="mb-4">
                  <label className="block font-semibold">Judul</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Deskripsi</label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Message</label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Gambar</label>
                  <input
                    type="file"
                    name="image_path"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold">Avatar</label>
                  <input
                    type="file"
                    name="avatar"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="flex justify-between col-span-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={isEditMode ? handleUpdateNews : handleCreateNews}
                    className="px-6 py-2 bg-[#3B9E3F] text-white rounded-lg"
                  >
                    {isEditMode ? 'Update Berita' : 'Tambah Berita'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
            <div>
              <h5 className="text-xl font-semibold">Total Berita</h5>
              <p className="text-[#3B9E3F]">
                {isLoading ? "Menghitung..." : `Jumlah keseluruhan berita: ${newsData.length}`}
              </p>
            </div>
            <i className="fas fa-newspaper text-4xl text-green-500"></i>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
            <div>
              <h5 className="text-xl font-semibold">Berita Aktif</h5>
              <p className="text-[#3B9E3F]"> {isLoading ? "Menghitung..." : `Berita yang saat ini aktif dan ditampilkan: ${newsData.length}`}</p>
            </div>
            <i className="fas fa-check-circle text-4xl text-green-500"></i>
          </div>
        </div>
        {isLoading ? (
          <p className="text-center">Memuat data...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow rounded-lg p-6">
            <table className="w-full border-collapse">
              <thead className="bg-[#3B9E3F] text-white">
                <tr>
                  <th className="px-4 py-2 border">No</th>
                  <th className="px-4 py-2 border">Judul</th>
                  <th className="px-4 py-2 border">Nama Penulis</th>
                  <th className="px-4 py-2 border">Tanggal</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {newsData.map((news, index) => (
                  <tr key={news.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                    <td className="px-4 py-2 border">{news.title}</td>
                    <td className="px-4 py-2 border">{news.username}</td>
                    <td className="px-4 py-2 border text-center">{news.formattedCreatedAt}</td>
                    <td className="px-4 py-2 border text-center flex justify-center items-center space-x-2">
                      <button
                        onClick={() => handleEditNews(news.id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteNews(news.id)}
                        className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-400">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeritaAdmin;
