const express = require('express')
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');

const { upload, createEducation, deleteEducation, getEducationById, getEducations, updateEducation } = require('../../controller/User/edukasiController')

// Mitra
router.get('/educations', upload.none(), getEducations);
router.get('/educations/:id', upload.none(), authenticateJWT, getEducationById);
router.post('/educations/create', upload.single('image_path'), authenticateJWT, createEducation);
router.put('/educations/update/:id', upload.single('image_path'), authenticateJWT, updateEducation);
router.delete('/educations/delete/:id', upload.none(), authenticateJWT, deleteEducation);



module.exports = router;