const express = require('express')
const router = express.Router();
const authenticateJWT = require('../../middlewares/authMiddleware');

const { upload, createDonation, deleteDonation, getDonationById, getDonations, updateDonation } = require('../../controller/User/donationController')
const uploadFields = upload.fields([
    { name: 'image_path', maxCount: 1 },
    { name: 'avatar', maxCount: 1 },
]);
router.get('/donations', upload.none(), authenticateJWT, getDonations);
router.get('/donations/:id', upload.none(), authenticateJWT, getDonationById);
router.post('/donations/create', uploadFields, authenticateJWT, createDonation);
router.put('/donations/update/:id', uploadFields, authenticateJWT, updateDonation);
router.delete('/donations/delete/:id', upload.none(), authenticateJWT, deleteDonation);



module.exports = router;