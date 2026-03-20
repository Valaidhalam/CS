const Joi = require('joi');
const Enquiry = require('../models/Enquiry.model');
const { sendEnquiryAdminEmail, sendEnquiryAutoReply } = require('../services/email.service');
const { sendWhatsAppAlert } = require('../services/whatsapp.service');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[6-9]\d{9}$/).required().messages({
    'string.pattern.base': 'Phone number must be a valid 10-digit Indian number.'
  }),
  service: Joi.string().valid('Corporate Law', 'Compliance & Secretarial', 'Taxation & GST', 'Intellectual Property').required(),
  message: Joi.string().required()
});

const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    // Save to DB
    const enquiry = await Enquiry.create({ name, email, phone, service, message });

    // Send notifications in parallel (fail gracefully if email/whatsapp fails)
    Promise.allSettled([
      sendEnquiryAdminEmail(enquiry),
      sendEnquiryAutoReply(enquiry),
      sendWhatsAppAlert(enquiry)
    ]).then(results => {
      // Optional logging for debugging failures
      results.forEach((r, i) => { if (r.status === 'rejected') console.error(`Notification ${i} failed:`, r.reason) });
    });

    res.status(201).json({ success: true, message: "Enquiry received successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { contactSchema, createContact };
