const express = require('express')
const router = express.Router();
const authenticateJWT = require('../middlewares/authMiddleware');
const { deleteUser, updateUser, profil, upload } = require('../controller/userController');


router.post('/delete/:id', authenticateJWT, deleteUser);
router.put('/profil/update', upload.single('image_path'), authenticateJWT, updateUser);
router.get('/profil', authenticateJWT, profil);

module.exports = router;