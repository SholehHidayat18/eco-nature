const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = multer();

const { register, login, cekemail, resetPassword } = require('../controller/authController');

router.post('/register', upload.none(), register);
router.post('/login', upload.none(), login);
router.post('/reset-password', upload.none(), resetPassword);
router.post('/check-email', upload.none(), cekemail);




module.exports = router;