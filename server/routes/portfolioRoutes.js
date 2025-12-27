const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Get all portfolio items
router.get('/', portfolioController.getAllPortfolioItems);

// Get portfolio item by ID
router.get('/:id', portfolioController.getPortfolioItemById);

module.exports = router;

