import axios from 'axios';
import Pengaduan from '../class/PengaduanConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const createComment = async (formData) => {
    try {
        const response = await axios.post(`${apiUrl}/comments/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.comment) {
            return new Pengaduan(response.data.comment);
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};


const CommentService = {
    createComment,
};

export default CommentService;