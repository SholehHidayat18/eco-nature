import React, { useEffect, useState } from 'react';
import EduCard from '../Education/EduCard';
import EducationService from '../../service/EducationService';

const Edukasi = () => {
  const [educationData, setEducationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        setIsLoading(true);
        const educations = await EducationService.getEducations();
        setEducationData(educations);
        console.log(educations)
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducations();
  }, []);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96 overflow-hidden mb-16">
        <img
          src="/images/header.jpg"
          alt="Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <h1 className="text-6xl md:text-5xl text-white font-bold mb-4 ml-16">
              Econature: Bersama untuk Bumi yang <br /> Lebih Lestari
            </h1>
            <nav className="text-white/90 text-2xl ml-16">
              Beranda &raquo; Fitur &raquo; Edukasi
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {educationData.map((edu) => (
            <EduCard
              key={edu.id}
              title={edu.title}
              imageUrl={edu.imagePath ? `/images/educations/${edu.imagePath}` : '/images/e1.png'}
              date={new Date(edu.createdAt).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              newsLink={`/Edukasi/${edu.id}`}
              comments={
                edu.comments && edu.comments.length > 0
                  ? `${edu.comments.length} Komentar`
                  : 'Belum ada komentar'
              } // Gunakan panjang array komentar
            />
          ))}
        </div>


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

export default Edukasi;
