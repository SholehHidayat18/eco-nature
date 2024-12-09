import axios from 'axios';
import Payment from '../class/PaymentConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const createPayment = async (formData) => {
    try {
        const response = await axios.post(`${apiUrl}/payments/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.payment) {
            return new Payment(response.data.payment);
        } else {
            throw new Error("No Payment data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Payment info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch Payment info");
    }
};
const getPayments = async () => {
    try {
        const response = await axios.get(`${apiUrl}/payments`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,

            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.payments) {
            return response.data.payments.map(payment => new Payment(payment));
        } else {
            throw new Error("No Payment data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Payment info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch Payment info");
    }
};
const updatePayment = async (paymentId, formData) => {
    try {
        const response = await axios.put(`${apiUrl}/payments/status/${paymentId}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.payment) {
            return new Payment(response.data.payment); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Education data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Education info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch education info");
    }
}

const PaymentService = {
    createPayment,
    getPayments,
    updatePayment
};

export default PaymentService;