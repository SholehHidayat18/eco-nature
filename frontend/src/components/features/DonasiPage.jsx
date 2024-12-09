import { useState } from 'react';

const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="text-center">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">Jadilah Bagian dari Perubahan Hari Ini!</h2>
          <p className="text-gray-600 text-sm mb-4">Bersama kita bisa menciptakan dampak yang berarti</p>

          <div className="mb-6">
            <i className="bi bi-exclamation-circle text-4xl text-yellow-500"></i>
          </div>

          <p className="text-gray-700 text-sm mb-2">
            Program donasi ini telah berakhir
          </p>
          <p className="text-gray-600 mb-6">
            Lihat program donasi lainnya dan terus berbuat baik
          </p>

          <button
            onClick={onClose}
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <i className="bi bi-x-lg mr-2"></i>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

const DonasiPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDonasiClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handleDonasiClick}
        className="px-6 py-2 bg-[#848383] text-white rounded-lg hover:bg-gray-400 text-sm font-medium"
      >
        DONASI
      </button>

      <DonationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default DonasiPage;