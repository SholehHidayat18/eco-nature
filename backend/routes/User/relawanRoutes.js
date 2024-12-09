const express = require('express')
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');
const multer = require('multer');
const upload = multer();

const { createRelawan, deleteRelawan, getRelawan, getRelawanById, updateRelawan } = require('../../controller/User/relawanCOntroller')

// Mitra
router.get('/relawans', upload.none(), authenticateJWT, getRelawan);
router.get('/relawans/:id', upload.none(), authenticateJWT, getRelawanById);
router.post('/relawans/create', upload.none(), authenticateJWT, createRelawan);
router.put('/relawans/update/:id', upload.single('image_path'), authenticateJWT, updateRelawan);
router.delete('/relawans/delete/:id', upload.none(), authenticateJWT, deleteRelawan);



module.exports = router;