const Joi = require('joi');
const { sendCareerAdminEmail, sendCareerAutoReply } = require('../services/email.service');

const careerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{9}$/).required(),
  position: Joi.string().optional().allow(''),
  resumeLink: Joi.string().uri().required()
});

const submitApplication = async (req, res, next) => {
  try {
    const { name, email, phone, position, resumeLink } = req.body;
    
    const career = { name, email, phone, position, resumeLink };

    // Send notifications in parallel (fail gracefully if email fails)
    Promise.allSettled([
      sendCareerAdminEmail(career),
      sendCareerAutoReply(career)
    ]).then(results => {
      results.forEach((r, i) => { if (r.status === 'rejected') console.error(`Notification ${i} failed:`, r.reason) });
    });

    res.status(201).json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { careerSchema, submitApplication };
