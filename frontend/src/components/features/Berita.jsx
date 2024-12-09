import React, { useEffect, useState } from "react";
import NewsCard from "../News/NewsCard";
import NewsService from "../../service/NewsService";

const Berita = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await NewsService.getNewses(); // Panggil service API

        setNewsData(response);
        console.log(response)
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat memuat data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96 overflow-hidden mb-16">
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
              Beranda &raquo; Fitur &raquo; Informasi & Berita
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8 mb-8ao max-w-7xl">
        {isLoading && <p className="text-center text-gray-500">Memuat data...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {newsData.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        )}

        <div className="flex justify-center items-center space-x-2 mb-16">
          <button className="p-2 rounded-md border hover:bg-gray-100">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="p-2 rounded-md bg-green-500 text-white">1</button>
          <button className="p-2 rounded-md border hover:bg-gray-100">2</button>
          <button className="p-2 rounded-md border hover:bg-gray-100">3</button>
          <button className="p-2 rounded-md border hover:bg-gray-100">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Berita;
