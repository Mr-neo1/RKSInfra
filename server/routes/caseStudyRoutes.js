const express = require('express');
const router = express.Router();
const caseStudyController = require('../controllers/caseStudyController');

// Get all case studies
router.get('/', caseStudyController.getAllCaseStudies);

// Get case studies by industry
router.get('/industry/:industry', caseStudyController.getCaseStudiesByIndustry);

// Get case studies by service
router.get('/service/:service', caseStudyController.getCaseStudiesByService);

// Get case study by ID
router.get('/:id', caseStudyController.getCaseStudyById);

module.exports = router;


