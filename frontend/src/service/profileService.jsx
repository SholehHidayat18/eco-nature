import axios from 'axios';
import User from '../class/UserConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const getProfile = async () => {
    try {
        const response = await axios.get(`${apiUrl}/profil`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.user) {
            return new User(response.data.user) // Mapping each payment response to the Payment model
        } else {
            throw new Error("No User data found.");
        }
    } catch (error) {
        console.error("Failed to fetch User info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch User info");
    }
};


const updateProfile = async (formData) => {
    try {
        const response = await axios.put(`${apiUrl}/profil/update`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.user) {
            return new User(response.data.user) // Mapping each payment response to the Payment model
        } else {
            throw new Error("No User data found.");
        }
    } catch (error) {
        console.error("Failed to fetch User info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch User info");
    }
}



const ProfileService = {
    getProfile,
    updateProfile,
};

export default ProfileService;