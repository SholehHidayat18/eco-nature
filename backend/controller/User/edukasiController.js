const { Education, User, Comment } = require('../../associations'); // Pastikan ini sesuai dengan struktur Anda
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Konfigurasi Multer untuk upload gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../frontend/public/images/educations');

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Math.round(Math.random() * 1e9);
        const fileExt = path.extname(file.originalname).toLowerCase();
        cb(null, `${uniqueSuffix}${fileExt}`);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only images (jpeg, jpg, png) are allowed!'));
    },
});

// **Create Education**
const createEducation = async (req, res) => {
    const { title, description, quotes } = req.body;
    const userId = req.userId;
    const image_path = req.file ? `${req.file.filename}` : null;
    try {
        const newEducation = await Education.create({
            title,
            description,
            quotes,
            createdBy: userId, // Pastikan middleware autentikasi tersedia
            image_path,
        });
        res.status(201).json({ message: 'Education created successfully', education: newEducation });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get All Educations**
const getEducations = async (req, res) => {
    try {
        const educations = await Education.findAll({
            include: [{
                model: User,
                as: 'creator', // Asosiasi antara Education dan User
                attributes: ['id', 'name', 'email', 'image_path'],
            },
            {
                model: Comment,
                as: 'comments', // Asosiasi antara Education dan User
                attributes: ['id', 'message', 'createdAt'],
                include: [{
                    model: User,
                    as: 'owner',
                    attributes: ['id', 'name', 'image_path']


                }],
            }],
            attributes: ['id', 'title', 'description', 'quotes', 'image_path', 'createdAt'],
        });
        res.status(200).json({ educations });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get Education by ID**
const getEducationById = async (req, res) => {
    const { id } = req.params;
    try {
        const education = await Education.findByPk(id, {
            include: [{
                model: User,
                as: 'creator', // Asosiasi antara Education dan User
                attributes: ['id', 'name', 'email', 'image_path'],
            },
            {
                model: Comment,
                as: 'comments', // Asosiasi antara Education dan User
                attributes: ['id', 'message', 'createdAt'],
                include: [{
                    model: User,
                    as: 'owner',
                    attributes: ['id', 'name', 'image_path']


                }],
            }],
            attributes: ['id', 'title', 'description', 'quotes', 'image_path', 'createdAt'],
        });

        if (!education) {
            return res.status(404).json({ message: 'Education not found' });
        }

        res.status(200).json({ education });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Update Education**
const updateEducation = async (req, res) => {
    const { id } = req.params;
    const { title, description, quotes } = req.body;
    try {
        const education = await Education.findByPk(id);
        if (!education) {
            return res.status(404).json({ message: 'Education not found' });
        }

        if (req.file) {
            const newImagePath = req.file.filename;
            const dir = path.join(__dirname, '../../../frontend/public/images/educations');

            if (education.image_path) {
                const oldImagePath = path.join(dir, education.image_path);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            education.image_path = newImagePath;
        }

        education.title = title || education.title;
        education.description = description || education.description;
        education.quotes = quotes || education.quotes;

        await education.save();
        res.status(200).json({ message: 'Education updated successfully', education });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Delete Education**
const deleteEducation = async (req, res) => {
    const { id } = req.params;
    try {
        const education = await Education.findByPk(id);
        if (!education) {
            return res.status(404).json({ message: 'Education not found' });
        }

        if (education.image_path) {
            const dir = path.join(__dirname, '../../frontend/public/images/educations');
            const imagePath = path.join(dir, education.image_path);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await education.destroy();
        res.status(200).json({ message: 'Education deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createEducation,
    getEducations,
    getEducationById,
    updateEducation,
    deleteEducation,
    upload,
};
