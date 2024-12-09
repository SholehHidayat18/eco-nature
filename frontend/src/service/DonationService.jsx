import axios from 'axios';
import Donation from '../class/DonationConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const getDonations = async () => {
    try {
        const response = await axios.get(`${apiUrl}/donations`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.donations) {
            return response.data.donations.map(donation => new Donation(donation)); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};


const getDonationById = async (donationId) => {
    try {
        const response = await axios.get(`${apiUrl}/donations/${donationId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.donation) {
            return new Donation(response.data.donation); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};
const createDonation = async (formData) => {
    try {
        const response = await axios.post(`${apiUrl}/donations/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.donation) {
            return new Donation(response.data.donation); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};

const deleteDonation = async (donationId) => {
    try {
        const response = await axios.delete(`${apiUrl}/donations/delete/${donationId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message) {
            return response.data.message; // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
}

const updateDonation = async (donationId, formDataToSend) => {
    try {
        const response = await axios.put(`${apiUrl}/donations/update/${donationId}`, formDataToSend, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.donation) {
            return new Donation(response.data.donation); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
}

const DonationService = {
    getDonations,
    getDonationById,
    createDonation,
    deleteDonation,
    updateDonation,
};

export default DonationService;