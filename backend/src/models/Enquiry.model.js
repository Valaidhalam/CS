const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { 
    type: String, 
    required: true,
    enum: ['Compliance / Corporate Law / Secretarial', 'Consulting', 'Taxation & GST', 'Intellectual Property']
  },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Enquiry', enquirySchema);
