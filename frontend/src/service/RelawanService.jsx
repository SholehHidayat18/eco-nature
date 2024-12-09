import axios from 'axios';
import Relawan from '../class/RelawanConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const createRelawan = async (formData) => {
    try {
        const response = await axios.post(`${apiUrl}/relawans/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.relawan) {
            return new Relawan(response.data.relawan);
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};
const getRelawans = async () => {
    try {
        const response = await axios.get(`${apiUrl}/relawans`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.relawans) {
            return response.data.relawans.map(relawan => new Relawan(relawan));
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
}
const deleteRelawans = async (relawansId) => {
    try {
        const response = await axios.delete(`${apiUrl}/relawans/delete/${relawansId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message) {
            return response.data.message
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
}

const RelawanService = {
    createRelawan,
    getRelawans,
    deleteRelawans,
};

export default RelawanService;