import { Link } from "react-router-dom";

const NewsCard = ({ id, title, description, imagePath, createdAt, comments }) => {
    // Format createdAt
    const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full w-[367px]">
            <div className="relative w-[367px] h-[242px]">
                <img
                    src={imagePath ? `/images/berita/${imagePath}` : '/images/a1.png'}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col h-full">
                <div className="relative pb-4">
                    <h2 className="text-2xl font-bold mt-3 ml-3">{title}</h2>
                </div>

                <div className="flex-grow"></div>

                <div className="px-3 pb-4">
                    <Link
                        to={`/Berita/${id}`}
                        className="text-[#3B9E3F] hover:text-green-600 font-bold"
                    >
                        BACA SELENGKAPNYA
                    </Link>
                    <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                        <div className="flex items-center">
                            <i className="bi bi-calendar text-[#689F38] mr-2"></i>
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center">
                            <i className="bi bi-chat-dots text-[#689F38] mr-2"></i>
                            <span>{comments.length}</span> {/* Menampilkan jumlah komentar */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
