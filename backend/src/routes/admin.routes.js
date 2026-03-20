const express = require('express');
const router = express.Router();
const { loginAdmin, getEnquiries, updateEnquiryStatus } = require('../controllers/admin.controller');
const { protect } = require('../middlewares/auth.middleware');
const Career = require('../models/Career.model');

// Auth route
router.post('/auth/login', loginAdmin);

// Protected routes for Enquiries
router.get('/enquiries', protect, getEnquiries);
router.patch('/enquiries/:id', protect, updateEnquiryStatus);

// Protected routes for Careers
router.get('/careers', protect, async (req, res, next) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 });
    res.json({ success: true, count: careers.length, data: careers });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
