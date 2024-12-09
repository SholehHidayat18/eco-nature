const express = require('express')
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');

const { upload, createNews, deleteNews, getNewsById, getNewses, updateNews } = require('../../controller/User/newsController')

const uploadFields = upload.fields([
    { name: 'image_path', maxCount: 1 },
    { name: 'avatar', maxCount: 1 },
]);
// Mitra
router.get('/newses', upload.none(), getNewses);
router.get('/newses/:id', upload.none(), authenticateJWT, getNewsById);
router.post('/newses/create', uploadFields, authenticateJWT, createNews);
router.put('/newses/update/:id', uploadFields, authenticateJWT, updateNews);
router.delete('/newses/delete/:id', upload.none(), authenticateJWT, deleteNews);



module.exports = router;