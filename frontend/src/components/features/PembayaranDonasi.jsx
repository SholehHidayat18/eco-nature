import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BankService from '../../service/BankService';

const PembayaranDonasiDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // To navigate programmatically
  const [bankData, setBankData] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    total: '',
    bank_id: null,
    name: '',
    email: '',
    no_handphone: '',
    message: '',
    donation_id: id,
  });

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        setIsLoading(true);
        const banks = await BankService.getBank();
        setBankData(banks);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanks();
  }, []);

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    setFormData({ ...formData, bank_id: bank.id });
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setFormData({ ...formData, total: amount.replace("rb", "000") });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSelectedAmount(null);
  };

  const handleConfirmDonation = async () => {
    try {
      setShowPopup(false);
      navigate('/KonfirmasiPembayaran', { state: formData }); // Navigate with formData
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancelDonation = () => {
    setShowPopup(false);
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
              Beranda &raquo; Fitur &raquo; Donasi
            </nav>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto p-6 mb-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Jumlah Donasi</h2>
          <div className="flex mt-4">
            {["5rb", "10rb", "25rb", "50rb", "75rb", "100rb", "150rb"].map((amount) => (
              <button
                key={amount}
                className={`bg-gray-200 text-gray-700 px-4 py-2 m-1 rounded ${selectedAmount === amount ? 'bg-green-500 text-white' : ''}`}
                onClick={() => handleAmountSelect(amount)} // Allow switching between amounts
              >
                {amount}
              </button>
            ))}
            <input
              type="text"
              placeholder="Rp Lainnya"
              className="border border-gray-300 px-4 py-2 m-1 rounded w-1/4"
              name="total"
              value={formData.total}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='mb-8'>
          <h2 className="text-2xl font-bold">Pilih Bank Tujuan</h2>
          {isLoading && <p>Memuat data bank...</p>}
          {error && <p className="text-red-500">Terjadi kesalahan: {error}</p>}

          <div className="grid grid-cols-3 gap-4 mt-4 w-1/3">
            {bankData.map((bank) => (
              <button
                key={bank.id}

                onClick={() => handleBankSelect(bank)}
              >
                <img
                  src={`/images/bank/${bank.imagePath}`}
                  alt={`${bank.brand} Logo`}
                  className="w-full mx-auto mb-2"
                />
                <p
                  className={` p-2 ${selectedBank?.id === bank.id ? 'border-green-500 bg-green-100 border rounded-lg' : ''
                    }`}
                >{bank.brand}</p>
              </button>
            ))}
          </div>

          {selectedBank && (
            <div className="mt-6 p-4 bg-gray-100 border rounded">
              <h3 className="text-xl font-bold">Informasi Bank</h3>
              <p><strong>Nama Pemilik:</strong> {selectedBank.an}</p>
              <p><strong>Nomor Rekening:</strong> {selectedBank.no_rek}</p>
              <p><strong>Bank:</strong> {selectedBank.brand}</p>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Pesan Anda</h2>
          <textarea
            name="message"
            className="border border-gray-300 w-full h-32 p-2 mt-2 rounded"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Detail Donatur</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="border border-gray-300 p-2 rounded"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Masukkan Alamat Email"
              className="border border-gray-300 p-2 rounded"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Nomor Handphone"
              className="border border-gray-300 p-2 rounded"
              name="no_handphone"
              value={formData.no_handphone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 mb-8">
          <button
            className="bg-[#3B9E3F] text-white px-6 py-2 rounded"
            onClick={() => setShowPopup(true)}
          >
            LANJUTKAN UNTUK BERDONASI
          </button>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Apakah anda yakin untuk berdonasi?</h2>
              {selectedAmount && (
                <p className="mb-4">Jumlah donasi yang dipilih: Rp {selectedAmount}</p>
              )}
              <div className="flex justify-between">
                <button
                  className="bg-[#BD081B] hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancelDonation}
                >
                  TIDAK
                </button>
                <button
                  className="bg-[#3B9E3F] hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleConfirmDonation}
                >
                  <Link to="/KonfirmasiPembayaran">YA</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PembayaranDonasiDetail;
