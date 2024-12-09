import axios from 'axios';
import News from '../class/NewsConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const getNewses = async () => {
    try {
        const response = await axios.get(`${apiUrl}/newses`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.newses) {
            return response.data.newses.map(news => new News(news)); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No News data found.");
        }
    } catch (error) {
        console.error("Failed to fetch News info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};


const getNewsById = async (newsId) => {
    try {
        const response = await axios.get(`${apiUrl}/newses/${newsId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.news) {
            return new News(response.data.news); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No News data found.");
        }
    } catch (error) {
        console.error("Failed to fetch News info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};

const createNews = async (formDataToSend) => {
    try {
        const response = await axios.post(`${apiUrl}/newses/create`, formDataToSend, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.news) {
            return new News(response.data.news); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No News data found.");
        }
    } catch (error) {
        console.error("Failed to fetch News info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
}
const updateNews = async (newsId, formDataToSend) => {
    try {
        const response = await axios.put(`${apiUrl}/newses/update/${newsId}`, formDataToSend, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.news) {
            return new News(response.data.news); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No News data found.");
        }
    } catch (error) {
        console.error("Failed to fetch News info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
}

const deleteNews = async (newsId) => {
    try {
        const response = await axios.delete(`${apiUrl}/newses/delete/${newsId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message) {
            return response.data.message; // Mapping each payment response to the Payment model
        } else {
            throw new Error("No News data found.");
        }
    } catch (error) {
        console.error("Failed to fetch News info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
}

const NewsService = {
    getNewses,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
};

export default NewsService;