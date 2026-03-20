const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser.model');
const Enquiry = require('../models/Enquiry.model');
const Career = require('../models/Career.model');

// Generate JWT for admin
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Auth admin & get token
// @route   POST /api/admin/auth/login
// @access  Public
const loginAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    // Automatically seed an admin if no admins exist (for ease of deployment)
    const adminCount = await AdminUser.countDocuments();
    if (adminCount === 0 && username && password) {
      await AdminUser.create({ username, password });
    }

    const admin = await AdminUser.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        success: true,
        data: {
          _id: admin._id,
          username: admin.username,
          token: generateToken(admin._id),
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get all enquiries
// @route   GET /api/admin/enquiries
// @access  Private
const getEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    next(error);
  }
};

// @desc    Update enquiry status
// @route   PATCH /api/admin/enquiries/:id
// @access  Private
const updateEnquiryStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!['new', 'read', 'replied'].includes(status)) {
       return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const enquiry = await Enquiry.findById(id);

    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    enquiry.status = status;
    await enquiry.save();

    res.json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginAdmin, getEnquiries, updateEnquiryStatus };
