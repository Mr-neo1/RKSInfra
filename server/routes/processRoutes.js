const express = require('express');
const router = express.Router();
const processController = require('../controllers/processController');

// Get process details
router.get('/', processController.getProcessDetails);

module.exports = router;


