const { Relawan, User } = require('../../associations');

// **Create Relawan**
const createRelawan = async (req, res) => {
    const { name, email, alamat, no_handphone } = req.body;

    const userId = req.userId;
    try {
        const newRelawan = await Relawan.create({
            name,
            email,
            alamat,
            no_handphone,
            createdBy: userId,
        });
        res.status(201).json({ message: 'Relawan created successfully', relawan: newRelawan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get All Relawan**
const getRelawan = async (req, res) => {
    try {
        const relawans = await Relawan.findAll({
            include: [{
                model: User,
                as: 'creator', // Asosiasi antara Relawan dan User
                attributes: ['id', 'name', 'email', 'image_path'],
            }],
            attributes: ['id', 'name', 'email', 'alamat', 'no_handphone', 'createdAt'],
        });
        res.status(200).json({ relawans });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Get Relawan by ID**
const getRelawanById = async (req, res) => {
    const { id } = req.params;
    try {
        const relawan = await Relawan.findByPk(id, {
            include: [{
                model: User,
                as: 'creator',
                attributes: ['id', 'name', 'email', 'image_path'],
            }],
            attributes: ['id', 'name', 'email', 'alamat', 'createdAt', 'no_handphone'],
        });

        if (!relawan) {
            return res.status(404).json({ message: 'Relawan not found' });
        }

        res.status(200).json({ relawan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Update Relawan**
const updateRelawan = async (req, res) => {
    const { id } = req.params;
    const { name, email, alamat } = req.body;
    try {
        const relawan = await Relawan.findByPk(id);
        if (!relawan) {
            return res.status(404).json({ message: 'Relawan not found' });
        }

        relawan.name = name || relawan.name;
        relawan.email = email || relawan.email;
        relawan.alamat = alamat || relawan.alamat;

        await relawan.save();
        res.status(200).json({ message: 'Relawan updated successfully', relawan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Delete Relawan**
const deleteRelawan = async (req, res) => {
    const { id } = req.params;
    try {
        const relawan = await Relawan.findByPk(id);
        if (!relawan) {
            return res.status(404).json({ message: 'Relawan not found' });
        }

        await relawan.destroy();
        res.status(200).json({ message: 'Relawan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createRelawan,
    getRelawan,
    getRelawanById,
    updateRelawan,
    deleteRelawan,
};
