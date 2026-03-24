const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEnquiryAdminEmail = async (enquiry) => {
  const mailOptions = {
    from: `"T. Thulasi Raman Associates" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Enquiry – ${enquiry.service} from ${enquiry.name}`,
    html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> ${enquiry.name}</p>
      <p><strong>Email:</strong> ${enquiry.email}</p>
      <p><strong>Phone:</strong> ${enquiry.phone}</p>
      <p><strong>Service:</strong> ${enquiry.service}</p>
      <p><strong>Message:</strong></p>
      <p>${enquiry.message}</p>
      <br>
      <p><em>T. Thulasi Raman Associates</em></p>
    `
  };
  return transporter.sendMail(mailOptions);
};

const sendEnquiryAutoReply = async (enquiry) => {
  const mailOptions = {
    from: `"T. Thulasi Raman Associates" <${process.env.SMTP_USER}>`,
    to: enquiry.email,
    subject: `Thank you for contacting T. Thulasi Raman Associates`,
    html: `
      <h2>Thank You for Reaching Out</h2>
      <p>Dear ${enquiry.name},</p>
      <p>We have successfully received your enquiry regarding <strong>${enquiry.service}</strong>.</p>
      <p>Our team will review your message and get back to you within 1-2 business days.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>T. Thulasi Raman Associates</strong></p>
      <p>Company Secretary Firm</p>
    `
  };
  return transporter.sendMail(mailOptions);
};

const sendCareerAdminEmail = async (career) => {
  const mailOptions = {
    from: `"T. Thulasi Raman Associates" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Career Application – ${career.position || 'General'} from ${career.name}`,
    html: `
      <h2>New Career Application Received</h2>
      <p><strong>Name:</strong> ${career.name}</p>
      <p><strong>Email:</strong> ${career.email}</p>
      <p><strong>Phone:</strong> ${career.phone}</p>
      <p><strong>Position:</strong> ${career.position || 'Not specified'}</p>
      <p><strong>Resume Link:</strong> <a href="${career.resumeLink}">${career.resumeLink}</a></p>
      <br>
      <p><em>T. Thulasi Raman Associates</em></p>
    `
  };
  return transporter.sendMail(mailOptions);
};

const sendCareerAutoReply = async (career) => {
  const mailOptions = {
    from: `"T. Thulasi Raman Associates" <${process.env.SMTP_USER}>`,
    to: career.email,
    subject: `Thank you for applying to T. Thulasi Raman Associates`,
    html: `
      <h2>Application Received</h2>
      <p>Dear ${career.name},</p>
      <p>Thank you for applying for the position of <strong>${career.position || 'General Application'}</strong> at T. Thulasi Raman Associates.</p>
      <p>We have successfully received your application. Our team will review your credentials and get in touch with you if your profile matches our requirements.</p>
      <p>Typically, we process applications within 1-2 weeks. If you don't hear from us within this period, please note that we have kept your resume on file for future opportunities.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>T. Thulasi Raman Associates</strong></p>
      <p>Company Secretary Firm</p>
    `
  };
  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendEnquiryAdminEmail,
  sendEnquiryAutoReply,
  sendCareerAdminEmail,
  sendCareerAutoReply
};
