const express = require('express');
const router = express.Router();
const authRouters = require('./authRoutes');
const profileRoutes = require('./profileRoutes')

router.use(authRouters);
router.use(profileRoutes);

module.exports = router;
