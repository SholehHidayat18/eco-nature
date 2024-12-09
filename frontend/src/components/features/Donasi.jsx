import { useEffect, useState } from "react";
import DonationService from "../../service/DonationService";
import { Link } from "react-router-dom";

const Donasi = () => {
  const [donationData, setDonationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Untuk loading state
  const [error, setError] = useState(null); // Untuk menangani error

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        setIsLoading(true);
        const donations = await DonationService.getDonations(); // Panggil service API
        setDonationData(donations);
        console.log(donations)
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Bagian Header */}
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

      {/* Tampilkan jika sedang loading */}
      {isLoading && <p className="text-center">Memuat data donasi...</p>}

      {/* Tampilkan jika terjadi error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Bagian Donation Cards */}
      {!isLoading && !error && (
        <div className="donations-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 mx-auto max-w-7xl px-4">
          {donationData.map((donation) => (
            <div
              key={donation.id}
              className="bg-white flex flex-col justify-between border rounded-lg overflow-hidden p-6 mb-10"
            >
              <div className="mb-6">
                <img
                  src={`/images/donasi/${donation.imagePath}` || "/images/d4.png"}
                  alt={donation.title}
                  className="w-full mb-4"
                />
                <h1 className="font-bold text-xl min-h-[56px] line-clamp-2">
                  {donation.title}
                </h1>
              </div>
              <div className="flex  items-center gap-2 mb-4">
                <div className="flex  -space-x-4">
                  {donation.payments?.slice(0, 3).map((user, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 rounded-full overflow-hidden"
                    >
                      <img
                        src={user.from.image_path ? `/images/profile/${user.from.image_path}` : "/default_profile.jpg"}
                        alt="user"
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 bg-[#3B9E3F] rounded-full flex items-center justify-center text-white text-sm">
                    +{donation.donationCount - 3}
                  </div>
                </div>
                <span className="text-sm text-gray-600">
                  {donation.donationCount} Pendukung
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-[#3B9E3F] h-2 rounded-full"
                  style={{ width: `${donation.donationProgress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 font-bold mb-4">
                <div className="w-full items-center justify-center text-center">
                  {donation.donationProgress}% <br /> Didanai
                </div>
                <div className="w-full items-center justify-center text-center">
                  Rp {donation.totalDonations.toLocaleString("id-ID")} <br />{" "}
                  Terkumpul
                </div>
                <div className="w-full items-center justify-center text-center">
                  Rp {donation.target.toLocaleString("id-ID")} <br /> Diperlukan
                </div>
              </div>
              <div className="w-full h-full justify-end flex items-end mt-2">
                <Link
                  to={`/Donasi/${donation.id}`}
                  className="w-full bg-[#3B9E3F] text-center text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                  DONASI SEKARANG
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donasi;
