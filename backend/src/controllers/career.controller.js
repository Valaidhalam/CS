const Joi = require('joi');
const Career = require('../models/Career.model');
const { sendCareerAdminEmail } = require('../services/email.service');

const careerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[6-9]\d{9}$/).required(),
  position: Joi.string().optional().allow(''),
  resumeLink: Joi.string().uri().required()
});

const submitApplication = async (req, res, next) => {
  try {
    const { name, email, phone, position, resumeLink } = req.body;
    
    // Save to DB
    const career = await Career.create({ name, email, phone, position, resumeLink });

    // Send email to admin
    sendCareerAdminEmail(career).catch(err => console.error("Career email failed:", err));

    res.status(201).json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { careerSchema, submitApplication };
