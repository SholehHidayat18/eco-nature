const express = require('express')
const router = express.Router();
const authenticateJWT = require('../middlewares/authMiddleware');

const { upload, createBank, deleteBank, getBankById, getBanks, updateBank } = require('../controller/bankController')

// Mitra
router.get('/banks', upload.none(), authenticateJWT, getBanks);
router.get('/banks/:id', upload.none(), authenticateJWT, getBankById);
router.post('/banks/create', upload.single('image_path'), authenticateJWT, createBank);
router.put('/banks/update/:id', upload.single('image_path'), authenticateJWT, updateBank);
router.delete('/banks/delete/:id', upload.none(), authenticateJWT, deleteBank);



module.exports = router;