import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Kontak() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle contact button click to open email
  const handleContactClick = (e) => {
    e.preventDefault();
    
    // Construct email body from form data
    const { name, email, contact, subject, message } = formData;
    
    const emailBody = `Nama: ${name}
      Email Pengirim: ${email}
      Kontak: ${contact}

      Pesan:
      ${message}`;

    // Create mailto link
    const mailtoLink = `mailto:support@econature.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

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
                      Beranda &raquo; Kontak
                  </nav>
              </div>
          </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl mt-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full h-full">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Jangan Ragu untuk Menghubungi Kami
            </h1>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="contact"
                  placeholder="Kontak"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subjek"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              
              <button 
                onClick={handleContactClick}
                className="bg-[#3B9E3F] w-full text-center justify-center hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group"
              >
                HUBUNGI KAMI
              </button>
            </form>
          </div>

          <div className="relative w-[555px] h-[400px] rounded-xl overflow-hidden mt-2">
              <MapContainer center={[-1.6105, 103.6143]} zoom={12} className="h-full w-full rounded-lg">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-1.6105, 103.6143]}>
                  <Popup>Kota Jambi</Popup>
                </Marker>
              </MapContainer>
          </div>
        </div>

          <div className="mt-16 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Informasi Kontak
            </h2>    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Kontak :</h3>
                  <div className="flex items-center space-x-2">
                    <i className="bi bi-telephone-fill text-[#3B9E3F]"></i>
                    <span>Telepon: <Link 
                        to={`tel:+62812345678`} 
                        className="hover:text-[#3B9E3F] transition-colors"
                      >
                        +62 812-3456-7890
                      </Link>
                    </span>
                  </div>
              </div>
                  
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">
                    Untuk Informasi Lebih Lanjut:
                </h3>
                <div className="flex items-center space-x-2">
                    <i className="bi bi-envelope-fill text-[#3B9E3F]"></i>
                    <span>Email: <Link 
                      to="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=support@econature.com" 
                      className="hover:text-[#3B9E3F] transition-colors"
                    >
                      support@econature.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Kontak;
