const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate.middleware');
const { contactLimiter } = require('../middlewares/rateLimit.middleware');
const { contactSchema, createContact } = require('../controllers/contact.controller');

router.post('/', contactLimiter, validate(contactSchema), createContact);

module.exports = router;
