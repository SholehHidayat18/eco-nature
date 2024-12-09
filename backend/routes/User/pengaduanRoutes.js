const express = require('express')
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');

const { upload, createPengaduan, deletePengaduan, getPengaduan, updatePengaduanStatus, getPengaduanById } = require('../../controller/User/pengaduanController')

router.get('/pengaduans', upload.none(), getPengaduan);
router.get('/pengaduans/:id', upload.none(), authenticateJWT, getPengaduanById);
router.post('/pengaduans/create', upload.single('image_path'), authenticateJWT, createPengaduan);
router.put('/pengaduans/update/:id', upload.none(), authenticateJWT, updatePengaduanStatus);
router.delete('/pengaduans/delete/:id', upload.none(), authenticateJWT, deletePengaduan);

module.exports = router;