const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../frontend/public/images/profile');

        // Periksa apakah folder sudah ada, jika belum buat folder
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir); // Tentukan direktori penyimpanan file
    },
    filename: (req, file, cb) => {
        // Gunakan angka acak sebagai nama file
        const uniqueSuffix = Math.round(Math.random() * 1e9); // Angka acak unik
        const fileExt = path.extname(file.originalname).toLowerCase(); // Ekstensi file

        // Gabungkan nama file dengan ekstensi asli
        cb(null, `${uniqueSuffix}${fileExt}`);
    },
});

// Setup Multer dengan pengaturan storage dan validasi file
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Maksimal ukuran file 5MB
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/; // Ekstensi yang diterima
        const mimetype = filetypes.test(file.mimetype); // Validasi tipe MIME
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Validasi ekstensi

        if (mimetype && extname) {
            return cb(null, true); // File diterima
        }
        cb(new Error('Only images (jpeg, jpg, png) are allowed!')); // Jika tidak sesuai, kirim error
    },
});

const profil = async (req, res) => {
    try {
        const user = await User.findByPk(req.userId, {
            attributes: { exclude: ['password'] },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    const userId = req.userId;
    const {
        name,
        password,
        tanggal_lahir,
        pekerjaan,
        no_handphone,
        alamat,
        jenis_kelamin,
    } = req.body;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Periksa apakah nomor handphone unik
        if (no_handphone && no_handphone !== user.no_handphone) {
            const phoneExists = await User.findOne({ where: { no_handphone } });
            if (phoneExists) {
                return res.status(400).json({ message: 'Nomor handphone sudah digunakan' });
            }
            user.no_handphone = no_handphone;
        }

        if (name) user.name = name;
        if (password) user.password = await bcrypt.hash(password, 10);
        if (tanggal_lahir) user.tanggal_lahir = tanggal_lahir;
        if (pekerjaan) user.pekerjaan = pekerjaan;
        if (alamat) user.alamat = alamat;
        if (jenis_kelamin) user.jenis_kelamin = jenis_kelamin;

        // Update gambar profil jika ada
        if (req.file) {
            const newImagePath = req.file.filename;
            const dir = path.join(__dirname, '../../frontend/public/images/profile');

            // Hapus gambar lama
            if (user.image_path) {
                const oldImagePath = path.join(dir, user.image_path);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            user.image_path = newImagePath;
        }

        await user.save();

        const { password: _, ...userWithoutPassword } = user.toJSON();

        res.status(200).json({ message: 'Profil berhasil diperbarui', user: userWithoutPassword });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (req.user.id !== parseInt(id)) {
        return res.status(403).json({ message: 'Forbidden: You can only delete your own profile.' });
    }

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { deleteUser, updateUser, profil, upload };
