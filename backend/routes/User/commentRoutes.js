const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = multer();

const authenticateJWT = require('../../middlewares/authMiddleware');

const { createComment, deleteComment, getCommentById, getComments, updateComment } = require('../../controller/User/commentController')

// Mitra
router.get('/comments', upload.none(), authenticateJWT, getComments);
router.get('/comments/:id', upload.none(), authenticateJWT, getCommentById);
router.post('/comments/create', upload.single('image_path'), authenticateJWT, createComment);
router.put('/comments/update/:id', upload.single('image_path'), authenticateJWT, updateComment);
router.delete('/comments/delete/:id', upload.none(), authenticateJWT, deleteComment);



module.exports = router;