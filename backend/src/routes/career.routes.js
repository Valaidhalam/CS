const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate.middleware');
const { defaultLimiter } = require('../middlewares/rateLimit.middleware');
const { careerSchema, submitApplication } = require('../controllers/career.controller');

router.post('/', defaultLimiter, validate(careerSchema), submitApplication);

module.exports = router;
