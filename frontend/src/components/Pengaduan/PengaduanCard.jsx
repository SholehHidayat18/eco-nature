const PengaduanCard = ({ createdAt, description, alamat, imagePath, status, provinsi, title, jenisSampah, id }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="relative h-48">
            {/* Display image or fallback */}
            <img
                src={`/images/pengaduan/${imagePath}` || "/images/default-image.jpg"} // Fallback image
                alt={description}
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 text-white">
                <div className="flex items-center space-x-2">
                    <span>•</span>
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2 line-clamp-2 min-h-[68px]">{title}</h2>
            <div className="flex items-start space-x-2">
                <i className="bi bi-geo-alt-fill text-[#689F38]"></i>
                <span className="text-gray-600">{alamat}</span>
            </div>
            <div className="text-gray-500">{provinsi}</div>
            <div className="text-gray-600">Jenis Sampah: {jenisSampah}</div>
            <div className={`block w-full text-white font-semibold px-4 pb-4 py-2 rounded text-center mt-3 ${status === 'Diproses' ? 'bg-yellow-500' : status === 'Selesai' ? 'bg-green-500' : 'bg-red-500'}`}>
                {status}
            </div>
        </div>
        <div className="px-4 pb-4 ml-16 mr-16">
            <a
                href={`/Pengaduan/${id}`} // Adjust URL to go to the creator's page or detail
                className="block uppercase w-56 bg-[#3B9E3F] text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors text-center no-underline font-semibold justify-center items-center"
            >
                LIHAT DETAIL
            </a>
        </div>
    </div>
);

export default PengaduanCard;
