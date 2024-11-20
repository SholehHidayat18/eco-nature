import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-32">
          <div className='ml-12'>
            <h3 className="text-[#9CCC65] font-semibold mb-4">Tentang Econature</h3>
            <p className="text-[#FFFFFF]">
            Mewujudkan masa depan hijau bersama. Dukung kampanye ramah lingkungan dan mulailah langkah kecil menuju bumi yang lebih bersih dan berkelanjutan!
            </p>
          </div>
          <div className='ml-24'>
            <h3 className="text-[#9CCC65] font-semibold mb-4">Hubungi Kami</h3>
            <p className="text-[#FFFFFF]">Email: support@econature.com</p>
            <p className="text-[#FFFFFF]">Telepon: +62 812-3456-7890</p>
          </div>
          <div className='ml-32'>
            <h3 className="font-semibold mb-4 text-[#9CCC65]">Ikuti Kami</h3>
              <div className="space-y-4">
                <p>
                  <Link to="https://instagram.com/econatureofficial" className="flex items-center space-x-3 hover:text-[#ACEB98] transition-colors">
                    <i className="bi bi-instagram">{" "}</i>
                    <span>EconatureOfficial</span>
                  </Link>
                </p>
                <p>
                  <Link to="https://facebook.com/econature.official" className="flex items-center space-x-3 hover:text-[#ACEB98] transition-colors">
                    <i className="bi bi-facebook">{" "}</i>
                    <span>Econature.Official</span>
                </Link>
                </p>
                <p>
                  <Link to="https://instagram.com/econatureofficial" className="flex items-center space-x-3 hover:text-[#ACEB98] transition-colors">
                    <i className="bi bi-youtube">{" "}</i>
                    <span>EconatureChannel</span>
                  </Link>
                </p>
            </div>
          </div>    
        </div><br />
        <div className="container max-w-7xl mx-auto px-4">
          <button className='bg-[#66BB6A] hover:bg-[#4CAF50] text-white px-6 py-2 rounded-md max-w-7xl mx-auto px-4 ml-12'>
            <a href="/tentang-kami">
              LEBIH LANJUT
            </a>
          </button>
        </div><br />
        <div className="container flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="text-3xl font-bold ml-12">econature.</div>
          <div className="text-sm mr-12">
            All Rights Reserved of Econature © 2024, Design & Developed By: Econature
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
  