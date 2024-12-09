import React, { useEffect, useState } from 'react';
import AsideDonatin from '../Donation/asideDonation';
import { useParams } from 'react-router-dom';
import EducationService from '../../service/EducationService';
import { Person, Reply } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';
import CommentService from '../../service/CommentService';


const DetailEdukasi = () => {
    const { id } = useParams();
    const [educationData, setEducationData] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Untuk loading state
    const [error, setError] = useState(null);
    const [sendComment, setSendComment] = useState({
        education_id: id,
        message: ''
    })


    useEffect(() => {
        const fetchEducations = async () => {
            try {
                setIsLoading(true);
                const educations = await EducationService.getEducationById(id); // Panggil service API
                setEducationData(educations);
                console.log(educations)
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEducations();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!educationData) {
        return <div>Edukasi tidak ditemukan.</div>;
    }

    const handleCommentChange = (e) => {
        setSendComment({
            ...sendComment,
            [e.target.name]: e.target.value
        });
    };

    const handleSendComment = async (e) => {
        e.preventDefault();

        // Validasi jika message kosong
        if (!sendComment.message.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Komentar tidak boleh kosong!',
                confirmButtonColor: '#3B9E3F',
            });
            return;
        }

        try {
            await CommentService.createComment(sendComment); // Mengirim komentar
            const educations = await EducationService.getEducationById(id); // Panggil service API
            setEducationData(educations);
            setSendComment({ ...sendComment, message: '' }); // Reset form
            Swal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: 'Komentar Anda telah dikirim!',
                confirmButtonColor: '#3B9E3F',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: 'Terjadi kesalahan saat mengirim komentar.',
                confirmButtonColor: '#3B9E3F',
            });
            console.error("Error sending comment:", error);
        }
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
                            Beranda &raquo; Fitur &raquo; Edukasi &raquo; Lebih Lanjut
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-12 max-w-7xl px-4 mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        {/* Gambar dan Deskripsi */}
                        <div className="mb-8">
                            <img
                                src={`/images/educations/${educationData.imagePath || "default.jpg"}`}
                                alt={educationData.title || "Gambar Edukasi"}
                                className="w-full rounded-lg mb-8"
                            />
                            <h2 className="text-3xl font-bold mb-3">{educationData.title}</h2>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                {educationData.description}
                            </p>
                        </div>

                        {/* Kutipan */}
                        {educationData.quotes && (
                            <div className="bg-gray-50 p-6 rounded-lg flex items-center ml-48 w-[427px] h-[#132px] mb-6">
                                <blockquote className="italic text-[#555555]">
                                    "{educationData.quotes}"
                                </blockquote>
                            </div>
                        )}

                        <div className="space-y-4 mt-8">
                            <h2 className="text-2xl font-bold mb-2">Komentar pada Postingan</h2>
                            {educationData.comments.map((comment, index) => (
                                <div key={index} className="border-b border-gray-200">
                                    <div className="flex gap-4 p-4">
                                        <Person className="w-12 h-12 text-gray-400" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold">{comment.owner.name}</h3>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-500 text-sm">{new Date(comment.createdAt).toLocaleString()}</span>

                                                </div>
                                            </div>
                                            <p className="text-gray-600">{comment.message}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <AsideDonatin />
                </div>
                <div className="lg:col-span-2 mb-8 mt-6">
                    <h2 className="text-2xl font-bold mb-6">Tinggalkan Komentar</h2>
                    <form className="space-y-4" onSubmit={handleSendComment}>
                        <textarea
                            rows="6"
                            name="message"
                            value={sendComment.message}
                            onChange={handleCommentChange}
                            placeholder="Komentar Anda"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        </textarea>
                        <button
                            type="submit"
                            className="w-full bg-[#3B9E3F] text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                            KIRIMKAN KOMENTAR ANDA
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DetailEdukasi;