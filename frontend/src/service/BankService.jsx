import axios from 'axios';
import Bank from '../class/BankConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const getBank = async () => {
    try {
        const response = await axios.get(`${apiUrl}/banks`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.banks) {
            return response.data.banks.map(bank => new Bank(bank));
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};
const getBankById = async (bankId) => {
    try {
        const response = await axios.get(`${apiUrl}/banks/${bankId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.bank) {
            return new Bank(response.data.bank);
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};

const BankService = {
    getBank,
    getBankById
};

export default BankService;