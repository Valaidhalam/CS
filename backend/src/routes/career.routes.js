const express = require('express');
const router = express.Router();
const { defaultLimiter } = require('../middlewares/rateLimit.middleware');
const { submitApplication } = require('../controllers/career.controller');

// Simple route - no file upload for now
router.post('/', defaultLimiter, submitApplication);

module.exports = router;
