const { News, User, Comment } = require('../../associations'); // Pastikan ini sesuai dengan struktur Anda
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Konfigurasi Multer untuk upload gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../frontend/public/images/berita');
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


// **Create News**
const createNews = async (req, res) => {
    const { title, description, username, message, } = req.body;
    const userId = req.userId;
    try {
        const newNews = await News.create({
            title,
            description,
            username,
            message,
            createdBy: userId,
            image_path: req.files?.image_path?.[0]?.filename || null,
            avatar: req.files?.avatar?.[0]?.filename || null,
        });

        res.status(201).json({ message: 'News created successfully', news: newNews });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// **Get All News**
const getNewses = async (req, res) => {
    try {
        const newses = await News.findAll({
            include: [{
                model: User,
                as: 'creator', // Asosiasi antara News dan User
                attributes: ['id', 'name', 'email', 'image_path'],
            },
            {
                model: Comment,
                as: 'comments', // Asosiasi antara News dan User
                attributes: ['id', 'message', 'createdAt'],
                include: [{
                    model: User,
                    as: 'owner',
                    attributes: ['id', 'name', 'image_path']


                }],
            }],
            attributes: ['id', 'title', 'description', 'image_path', 'createdAt', 'message', 'username', 'avatar'],
        });
        res.status(200).json({ newses });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get News by ID**
const getNewsById = async (req, res) => {
    const { id } = req.params;
    try {
        const news = await News.findByPk(id, {
            include: [{
                model: User,
                as: 'creator', // Asosiasi antara News dan User
                attributes: ['id', 'name', 'email', 'image_path'],
            },
            {
                model: Comment,
                as: 'comments', // Asosiasi antara News dan User
                attributes: ['id', 'message', 'createdAt'],
                include: [{
                    model: User,
                    as: 'owner',
                    attributes: ['id', 'name', 'image_path']


                }],
            }],
            attributes: ['id', 'title', 'description', 'image_path', 'createdAt', 'message', 'username', 'avatar'],
        });

        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }

        res.status(200).json({ news });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateNews = async (req, res) => {
    const { id } = req.params;
    const { title, description, username, message } = req.body;

    try {
        const news = await News.findByPk(id);

        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }

        // Update fields jika ada perubahan
        news.title = title || news.title;
        news.description = description || news.description;
        news.username = username || news.username;
        news.message = message || news.message;

        // Jika file baru di-upload
        if (req.files) {
            const dir = path.join(__dirname, '../../../frontend/public/images/newses');

            // Cek dan hapus gambar lama jika ada
            if (news.image_path) {
                const oldImagePath = path.join(dir, news.image_path);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            // Jika ada file baru untuk gambar
            if (req.files.image_path) {
                news.image_path = req.files.image_path[0].filename; // Update dengan file baru
            }

            // Cek dan hapus avatar lama jika ada
            if (news.avatar) {
                const oldAvatarPath = path.join(dir, news.avatar);
                if (fs.existsSync(oldAvatarPath)) {
                    fs.unlinkSync(oldAvatarPath);
                }
            }

            // Jika ada file baru untuk avatar
            if (req.files.avatar) {
                news.avatar = req.files.avatar[0].filename; // Update dengan file baru
            }
        }

        // Simpan perubahan berita
        await news.save();
        res.status(200).json({ message: 'News updated successfully', news });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// **Delete News**
const deleteNews = async (req, res) => {
    const { id } = req.params;
    try {
        const news = await News.findByPk(id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }

        if (news.image_path) {
            const dir = path.join(__dirname, '../../frontend/public/images/newses');
            const imagePath = path.join(dir, news.image_path);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await news.destroy();
        res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createNews,
    getNewses,
    getNewsById,
    updateNews,
    deleteNews,
    upload,
};
