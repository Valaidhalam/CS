const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 requests per `window` (here, per hour)
  message: { success: false, message: 'Too many requests from this IP, please try again after an hour' },
  standardHeaders: true, 
  legacyHeaders: false,
});

const defaultLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // limit each IP to 100 requests per windowMs
});

module.exports = { contactLimiter, defaultLimiter };
