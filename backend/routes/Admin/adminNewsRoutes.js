const express = require('express')
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');

const { upload, createNews, deleteNews, getNewsById, getNewses, updateNews } = require('../../controller/Admin/newsController')

// Mitra
router.get('/newses', upload.none(), getNewses);
router.get('/newses/:id', upload.none(), authenticateJWT, getNewsById);
router.post('/newses/create', upload.single('image_path'), authenticateJWT, createNews);
router.put('/newses/update/:id', upload.single('image_path'), authenticateJWT, updateNews);
router.delete('/newses/delete/:id', upload.none(), authenticateJWT, deleteNews);



module.exports = router;