import axios from 'axios';
import Pengaduan from '../class/PengaduanConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const createPengaduan = async (formData) => {
    try {
        const response = await axios.post(`${apiUrl}/pengaduans/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.pengaduan) {
            return new Pengaduan(response.data.pengaduan);
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};
const getPengaduan = async () => {
    try {
        const response = await axios.get(`${apiUrl}/pengaduans`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.pengaduans) {
            return response.data.pengaduans.map(pengaduan => new Pengaduan(pengaduan)); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Pengaduan data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};

const getPengaduanById = async (pengaduanId) => {
    try {
        const response = await axios.get(`${apiUrl}/pengaduans/${pengaduanId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.pengaduan) {
            return new Pengaduan(response.data.pengaduan); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Education data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Education info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch education info");
    }
};

const updatePengaduan = async (pengaduanId, formData) => {
    try {
        const response = await axios.put(`${apiUrl}/pengaduans/update/${pengaduanId}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.pengaduan) {
            return new Pengaduan(response.data.pengaduan); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Education data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Education info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch education info");
    }
}

const PengaduanService = {
    createPengaduan,
    getPengaduan,
    getPengaduanById,
    updatePengaduan,
};

export default PengaduanService;