const { Payment, User, Bank, Donation } = require('../../associations'); // Asosiasi model
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Konfigurasi Multer untuk upload gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../../../frontend/public/bukti');
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

const updatePaymentStatus = async (req, res) => {
    const { id } = req.params; // Mengambil ID pengaduan dari parameter URL
    const { status } = req.body; // Mengambil status baru dari body request

    try {
        // Mencari pengaduan berdasarkan ID
        const payment = await Payment.findByPk(id);
        if (!payment) {
            return res.status(404).json({ message: 'Pengaduan not found' });
        }

        // Memperbarui status payment
        payment.status = status;

        // Menyimpan perubahan ke database
        await payment.save();

        res.status(200).json({ message: 'Payment status updated successfully', payment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Create Payment**
const createPayment = async (req, res) => {
    const { total, name, email, no_handphone, message, bank_id, donation_id } = req.body;
    const userId = req.userId; // ID User yang membuat payment
    const image_path = req.file ? `${req.file.filename}` : null;

    try {
        const newPayment = await Payment.create({
            total,
            name,
            email,
            no_handphone,
            message,
            bank_id,
            donation_id,
            createdBy: userId,
            image_path,
        });

        const donation = await Donation.findByPk(donation_id);
        if (!donation) {
            return res.status(404).json({ message: 'Donation not found' });
        }

        donation.donation_count += 1; // Tambahkan 1 ke donation_count
        await donation.save();

        res.status(201).json({ message: 'Payment created successfully', payment: newPayment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get All Payments**
const getPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll({
            include: [
                {
                    model: User,
                    as: 'owner',
                    attributes: ['id', 'name', 'email'],
                },
                {
                    model: Bank,
                    as: 'bank',
                    attributes: ['id', 'brand', 'an', 'no_rek', 'image_path'], // Informasi bank
                },
                {
                    model: Donation,
                    as: 'donation',
                    attributes: ['id', 'title'], // Informasi donasi
                },
            ],
            attributes: [
                'id',
                'total',
                'metode',
                'name',
                'email',
                'no_handphone',
                'message',
                'status',
                'image_path',
                'createdAt',
            ],
        });
        res.status(200).json({ payments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get Payment by ID**
const getPaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await Payment.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'owner',
                    attributes: ['id', 'name', 'email'],
                },
                {
                    model: Bank,
                    as: 'bank',
                    attributes: ['id', 'brand', 'an', 'no_rek', 'image_path'], // Informasi bank
                },
                {
                    model: Donation,
                    as: 'donation',
                    attributes: ['id', 'title'], // Informasi donasi
                },
            ],
            attributes: [
                'id',
                'total',
                'metode',
                'name',
                'email',
                'no_handphone',
                'message',
                'status',
                'image_path',
                'createdAt',
            ],
        });

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json({ payment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Update Payment**
const updatePayment = async (req, res) => {
    const { id } = req.params;
    const { total, metode, name, email, no_handphone, message, status } = req.body;
    const image_path = req.file ? `${req.file.filename}` : null;

    try {
        const payment = await Payment.findByPk(id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        payment.total = total || payment.total;
        payment.metode = metode || payment.metode;
        payment.name = name || payment.name;
        payment.email = email || payment.email;
        payment.no_handphone = no_handphone || payment.no_handphone;
        payment.message = message || payment.message;
        payment.status = status || payment.status;
        payment.image_path = image_path || payment.image_path;

        await payment.save();
        res.status(200).json({ message: 'Payment updated successfully', payment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Delete Payment**
const deletePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await Payment.findByPk(id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        await payment.destroy();
        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPayment,
    getPayments,
    getPaymentById,
    updatePayment,
    deletePayment,
    updatePaymentStatus,
    upload,
};
