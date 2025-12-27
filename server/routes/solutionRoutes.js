const express = require('express');
const router = express.Router();
const solutionController = require('../controllers/solutionController');

// Get all solutions
router.get('/', solutionController.getAllSolutions);

// Get solutions by category
router.get('/category/:category', solutionController.getSolutionsByCategory);

// Get solution by ID
router.get('/:id', solutionController.getSolutionById);

module.exports = router;


