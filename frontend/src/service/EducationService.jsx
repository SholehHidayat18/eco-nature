import axios from 'axios';
import Education from '../class/EducationConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const getEducations = async () => {
    try {
        const response = await axios.get(`${apiUrl}/educations`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.educations) {
            return response.data.educations.map(education => new Education(education)); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Education data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Education info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch education info");
    }
};


const getEducationById = async (educationId) => {
    try {
        const response = await axios.get(`${apiUrl}/educations/${educationId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.education) {
            return new Education(response.data.education); // Mapping each payment response to the Payment model
        } else {
            throw new Error("No Education data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Education info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch education info");
    }
};


const createEducation = async (formData) => {
    try {
        const response = await axios.post(`${apiUrl}/educations/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.education) {
            return new Education(response.data.education);
        } else {
            throw new Error("No Education data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Education info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch education info");
    }
};

const updateEducation = async (educationId, formData) => {
    try {
        const response = await axios.put(`${apiUrl}/educations/update/${educationId}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.education) {
            return new Education(response.data.education);
        } else {
            throw new Error("No Education data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Education info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch education info");
    }
};
const deleteEducation = async (educationId) => {
    try {
        const response = await axios.delete(`${apiUrl}/educations/delete/${educationId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message) {
            return response.data.message
        } else {
            throw new Error("No Education data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Education info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch education info");
    }
};

const EducationService = {
    getEducations,
    getEducationById,
    deleteEducation,
    createEducation,
    updateEducation
};

export default EducationService;