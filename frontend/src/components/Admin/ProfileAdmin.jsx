import React from "react";
import { FaTachometerAlt, FaHandHoldingHeart, FaBookOpen, FaUsers, FaExclamationCircle, FaGift, FaNewspaper, FaSignOutAlt, FaBell, FaUser } from 'react-icons/fa';
import NavbarAdmin from "../NavbarAdmin";

const ProfileAdmin = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#3B9E3F] text-white p-6 mt-14">
        <NavbarAdmin />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 px-6 py-4 flex justify-between items-center">
          <a href="/admin/Dashboard" className="font-bold text-2xl text-[#3B9E3F]">
            EcoNature Admin
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#3B9E3F] hover:text-gray-700">
              <FaBell className="text-2xl" />
            </a>
            <a href="/admin/ProfileAdmin" className="text-[#3B9E3F] hover:text-gray-700">
              <FaUser className="text-2xl" />
            </a>
          </div>
        </nav>
        {/* Profile Header */}
        <section className="bg-[#3B9E3F] text-white rounded-lg p-6 shadow-lg text-center mt-16">
          <img
            src="/images/user.jpeg"
            alt="Admin Profile Picture"
            className="rounded-full w-36 h-36 mx-auto mb-4"
          />
          <h1 className="text-3xl font-semibold">Asnia Marshela</h1>
          <p className="text-lg mt-2">Admin | EcoNature</p>
          <a
            href="/edit-profile"
            className="bg-white text-green-600 mt-4 py-2 px-6 rounded-full inline-block hover:bg-gray-100"
          >
            Edit Profile
          </a>
        </section>

        {/* User Info Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Profile Information</h3>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Name:</span> Asnia Marshela
            </p>
            <p>
              <span className="font-semibold">Email:</span> asnia.marshela@econature.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +62 812 3456 7890
            </p>
            <p>
              <span className="font-semibold">Role:</span> Administrator
            </p>
            <p>
              <span className="font-semibold">Joined on:</span> 1st January 2024
            </p>
          </div>
          <button
            onClick={() => alert("Edit Profile Information clicked!")}
            className="mt-6 bg-[#3B9E3F] text-white py-2 px-6 rounded-full hover:bg-green-500 transition"
          >
            Edit Profile Information
          </button>
        </section>
      </main>
    </div>
  );
};

export default ProfileAdmin;
