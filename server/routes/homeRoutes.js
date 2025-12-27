const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Get homepage data (stats, hero content, etc.)
router.get('/', homeController.getHomeData);

module.exports = router;

