const { Bank, User } = require('../associations'); // Asosiasi model Bank dan User
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Konfigurasi Multer untuk upload gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../frontend/public/images/bank');
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
    limits: { fileSize: 2 * 1024 * 1024 }, // Maksimal ukuran file 2MB
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

// **Create Bank**
const createBank = async (req, res) => {
    const { an, no_rek, brand } = req.body;
    const userId = req.userId; // ID User yang membuat data bank
    const image_path = req.file ? `${req.file.filename}` : null;

    try {
        const newBank = await Bank.create({
            an,
            no_rek,
            brand,
            image_path,
            createdBy: userId,
        });
        res.status(201).json({ message: 'Bank created successfully', bank: newBank });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get All Banks**
const getBanks = async (req, res) => {
    try {
        const banks = await Bank.findAll({
            include: [
                {
                    model: User,
                    as: 'owner',
                    attributes: ['id', 'name', 'email'],
                },
            ],
            attributes: [
                'id',
                'an',
                'no_rek',
                'brand',
                'image_path',
                'createdAt',
            ],
        });
        res.status(200).json({ banks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get Bank by ID**
const getBankById = async (req, res) => {
    const { id } = req.params;
    try {
        const bank = await Bank.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'owner',
                    attributes: ['id', 'name', 'email'],
                },
            ],
            attributes: [
                'id',
                'an',
                'no_rek',
                'brand',
                'image_path',
                'createdAt',
            ],
        });

        if (!bank) {
            return res.status(404).json({ message: 'Bank not found' });
        }

        res.status(200).json({ bank });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Update Bank**
const updateBank = async (req, res) => {
    const { id } = req.params;
    const { an, no_rek, brand } = req.body;
    const image_path = req.file ? `${req.file.filename}` : null;

    try {
        const bank = await Bank.findByPk(id);
        if (!bank) {
            return res.status(404).json({ message: 'Bank not found' });
        }

        bank.an = an || bank.an;
        bank.no_rek = no_rek || bank.no_rek;
        bank.brand = brand || bank.brand;
        bank.image_path = image_path || bank.image_path;

        await bank.save();
        res.status(200).json({ message: 'Bank updated successfully', bank });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Delete Bank**
const deleteBank = async (req, res) => {
    const { id } = req.params;
    try {
        const bank = await Bank.findByPk(id);
        if (!bank) {
            return res.status(404).json({ message: 'Bank not found' });
        }

        await bank.destroy();
        res.status(200).json({ message: 'Bank deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createBank,
    getBanks,
    getBankById,
    updateBank,
    deleteBank,
    upload,
};
